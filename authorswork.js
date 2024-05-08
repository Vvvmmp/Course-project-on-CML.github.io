$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "catalog.xml",
    dataType: "xml",
    success: function(xml) {
      var authors = {};
      $(xml).find("book").each(function() {
        var author = $(this).find("author").text();
        var articul = $(this).find("articul").text(); 
        var book = {
          img: $(this).find("img").text(),
          name: $(this).find("name").text(),
        };
        if (authors.hasOwnProperty(author)) {
          authors[author].push({ ...book, articul }); 
        } else {
          authors[author] = [{ ...book, articul }]; 
        }
      });
      var sortedAuthors = Object.keys(authors).sort();
      sortedAuthors.forEach(function(author) {
        var authorContainer = $("<div>").addClass("author");
        var authorName = $("<div>").addClass("author-name").text(author);
        var arrow = $("<div>").addClass("arrow").text("▼");
        var authorWorks = $("<div>").addClass("author-works").css("display", "none");

        // Iterate through books of the current author
        authors[author].forEach(function(book) {
          var articul = book.articul; // Get the articul for the current book
          var bookContainer = $("<a>")
            .addClass("book")
            .attr("href", "product.html?articul=" + articul);
          var bookImg = $("<img>").attr("src", book.img);
          var bookInformation = $("<div>").addClass("information");
       var bookName = $("<div>").addClass("nameBook").text(book.name);
          bookContainer.append(bookImg, bookInformation.append(bookName));
          authorWorks.append(bookContainer);
        });
        authorContainer.append(authorName, arrow, authorWorks);
        $("#authorsContainer").append(authorContainer);

        arrow.click(function() {
          $(this).toggleClass("active");

          if ($(this).hasClass("active")) {
            $(this).text("▲");
          } else {
            $(this).text("▼");
          }
          authorWorks.slideToggle("fast");
          authorWorks.css("display", $(this).hasClass("active") ? "flex" : "none");
        });
      });
    },
  });
});