const library = []

export default function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.addBook = function () {
  library.push(this);
}

export const setLocalStorage = () => {
  window.localStorage.setItem('library', JSON.stringify(library))
}

export const getLocalStorage = () => {
  const collection = JSON.parse(window.localStorage.getItem('library'))
  console.log(collection)
}