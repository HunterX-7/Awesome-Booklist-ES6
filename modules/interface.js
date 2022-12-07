import LocalStorage from './localstorage.js';

class Interface {
  static booksDisplay() {
    const books = LocalStorage.loadBooks();
    books.forEach((book) => Interface.addBook(book));
  }

  static addBook(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>  
        `;
    list.appendChild(row);
  }

  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }

  static clearValues() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

export default Interface;