import Book from './modules/book.js';
import LocalStorage from './modules/localstorage.js';
import Interface from './modules/interface.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', Interface.booksDisplay);
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  Interface.addBook(book);
  LocalStorage.addBookToStorage(book);
  Interface.clearValues();
});
document.getElementById('book-list').addEventListener('click', (e) => {
  Interface.removeBook(e.target);
  LocalStorage.removeBookFromStorage(e.target
    .parentElement
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .textContent);
});

const home = document.getElementById('home');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

const gethome = document.getElementById('get-home');
const getadd = document.getElementById('get-add');
const getcontact = document.getElementById('get-contact');

getcontact.addEventListener('click', (e) => {
  e.preventDefault();
  home.style.display = 'none';
  contact.style.display = 'block';
  add.style.display = 'none';
});

getadd.addEventListener('click', (e) => {
  e.preventDefault();
  home.style.display = 'none';
  contact.style.display = 'none';
  add.style.display = 'block';
});

gethome.addEventListener('click', (e) => {
  e.preventDefault();
  home.style.display = 'block';
  contact.style.display = 'none';
  add.style.display = 'none';
});

const clock = () => {
  const date = document.getElementById('date');
  const dateLuxon = DateTime.now().toFormat('LLL dd yyyy, t');
  date.textContent = dateLuxon;
};
setInterval(clock, 1000);