const library = []

export default function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.addBook = function () {
  library.push(this);
}

export const setLocalStorage = () => {
  window.localStorage.setItem('library', JSON.stringify(library))
}

export const getLocalStorage = () => {
  const collection = JSON.parse(window.localStorage.getItem('library'))
  
  if ( collection != null ) {
    collection.forEach(el => {
      library.push(el)
    })
  }
}

export const render = () =>{
  const render_collection =  document.querySelector('.books-container');
  render_collection.innerHTML = '';
  library.forEach((book, idx) => {
    fewCard(book, idx)
  })
  deleteCard()
  changeStatus()
}

const fewCard = (book, id) => {
  const render_collection =  document.querySelector('.books-container');
  let container =  document.createElement("div");
  let title = document.createElement('h1');
  let author   = document.createElement('h2');
  let page = document.createElement('h4');
  let statusContainer = document.createElement('span')
  let deleteBtn = document.createElement('button')

  container.id = id
  deleteBtn.dataset.id = id

  title.innerHTML = book.title;
  author.innerHTML = book.author;
  page.innerHTML = book.pages;
  statusContainer.innerHTML = book.status;
  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('btn-delete')
  statusContainer.classList.add('status')

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(page);
  container.appendChild(statusContainer);
  container.appendChild(deleteBtn);
  
  render_collection.appendChild(container);
}


window.addEventListener('DOMContentLoaded', () => {
  
})

const deleteCard = () => {
  const deleteBtns = [...document.querySelectorAll('.btn-delete')]
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      library.splice(e.target.dataset.id, 1)
      setLocalStorage()
      render()
    })
  })
}

const changeStatus = () => {
  const statusCollection = document.querySelectorAll('.status')
  statusCollection.forEach(status => {
    status.addEventListener('click', e =>{
      if ( e.target.innerHTML.toUpperCase() == 'READ') {
        status.innerHTML = 'Not read'
      } else {
        status.innerHTML = 'Read'
      }
    })
  })
}