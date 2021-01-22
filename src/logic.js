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

export const render = () =>{
  const render_collection =  document.querySelector('.books-container');
  render_collection.innerHTML = '';
  library.forEach(book => {
    fewCard(book)
  })
}

const fewCard = (book) => {
  console.log(book.pages);
  const render_collection =  document.querySelector('.books-container');
  var container =  document.createElement("div");
  var title = document.createElement('h1');
  var author   = document.createElement('h2');
  var page = document.createElement('h4');
  title.innerHTML = book.title;
  author.innerHTML = book.author;
  page.innerHTML = book.pages;
  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(page);
  render_collection.appendChild(container);
}


