import Book, { setLocalStorage, getLocalStorage, render } from './logic.js';

const createBtn = document.querySelector('.create-btn');

const selectedStatus = () => {
  let value;
  const statusChosen = [...document.getElementsByName('status')];
  statusChosen.map(opt => {
    if (opt.checked) {
      value = opt.value;
    }
  });
  return value;
};

createBtn.addEventListener('click', e => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const statusValue = selectedStatus();

  const newBook = new Book(title, author, pages, statusValue);
  newBook.addBook();
  setLocalStorage();
  render();
});

window.addEventListener('DOMContentLoaded', () => {
  getLocalStorage();
  render();
});

// const value = selectedStatus()

// console.log(value)