const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const searchValue = searchInput.value.toLowerCase();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'catalog.xml', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmlDoc = xhr.responseXML;

        const books = xmlDoc.getElementsByTagName('book');

        for (let i = 0; i < books.length; i++) {
          const book = books[i];

          const name = book.getElementsByTagName('name')[0].textContent.toLowerCase();
          const author = book.getElementsByTagName('author')[0].textContent.toLowerCase();

          if (name.includes(searchValue)) {
            const img = book.getElementsByTagName('img')[0].textContent;
            const articul = book.getElementsByTagName('articul')[0].textContent;
            const price = book.getElementsByTagName('price')[0].textContent;

            window.location.href = `product.html?img=${img}&articul=${articul}&price=${price}`;
            break; 
          }
        }
      }
    };
    xhr.send();
  }
});