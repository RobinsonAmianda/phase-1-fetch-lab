function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then((response) => {
    if (!response.ok) {
       Error('Network response was not ok');
    }
    return response.json();
  })
  .then((books) => {
    renderBooks(books);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
