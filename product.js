$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articul = urlParams.get('articul');
    $.ajax({
      type: "GET",
      url: "catalog.xml",
      dataType: "xml",
      success: function(xml) {
        $(xml).find('book').each(function() {
          if ($(this).find('articul').text() === articul) {
            var imgSrc = $(this).find('img').text();
            var name = $(this).find('name').text();
            var author = $(this).find('author').text();
            var price = $(this).find('price').text();
            $('#productImage').attr('src', imgSrc);
            $('#articulValue').text(articul);
            $('#nameValue').text(name);
            $('#authorValue').text(author);
            $('#priceValue').text(price);
          }
        });
      }
    });
  });