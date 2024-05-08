// Получение всех книг в каталоге
const books = Array.from(document.querySelectorAll('.book'));

// Количество книг на каждой странице
const booksPerPage = 12;

// Вычисление общего количества страниц
const totalPages = Math.ceil(books.length / booksPerPage);

// Создание массива стилей книг для сохранения их текущего состояния
const bookStyles = books.map(book => book.style.display);

// Функция для отображения заданной страницы
function showPage(pageNumber) {
  // Определение индексов начала и конца книг на текущей странице
  const startIndex = (pageNumber - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  // Перебор книг и отображение или скрытие их в зависимости от текущей страницы
  books.forEach((book, index) => {
    if (index >= startIndex && index < endIndex) {
      book.style.display = bookStyles[index]; // Отображение книги с сохраненным стилем
    } else {
      book.style.display = 'none'; // Скрытие книги
    }
  });
}

// Инициализация: отображение первой страницы при загрузке страницы
showPage(1);

// Обработчики событий для кнопок предыдущей и следующей страницы
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
prevButton.dataset.page = 1;
nextButton.dataset.page = 1;

prevButton.addEventListener('click', () => {
  let currentPage = parseInt(prevButton.dataset.page);
  if (currentPage > 1) {
    currentPage--;
    prevButton.dataset.page = currentPage;
    nextButton.dataset.page = currentPage;
    showPage(currentPage); // Отображение предыдущей страницы
  }
});

nextButton.addEventListener('click', () => {
  let currentPage = parseInt(nextButton.dataset.page);
  if (currentPage < totalPages) {
    currentPage++;
    prevButton.dataset.page = currentPage;
    nextButton.dataset.page = currentPage;
    showPage(currentPage); // Отображение следующей страницы
  }
});