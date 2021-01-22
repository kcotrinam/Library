import Book, { setLocalStorage } from './logic.js'

const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', e => {
  e.preventDefault();
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value

  const newBook = new Book(title, author, pages)
  newBook.addBook()
  setLocalStorage()
})