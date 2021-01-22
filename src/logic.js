const library = [];

export default function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.addBook = function () {
  library.push(this);
};

export const setLocalStorage = () => {
  window.localStorage.setItem('library', JSON.stringify(library));
};

export const getLocalStorage = () => {
  const collection = JSON.parse(window.localStorage.getItem('library'));

  if (collection != null) {
    collection.forEach(el => {
      library.push(el);
    });
  }
};

const fewCard = (book, id) => {
  const renderCollection = document.querySelector('.books-container');
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const author = document.createElement('h2');
  const page = document.createElement('h4');
  const statusContainer = document.createElement('span');
  const deleteBtn = document.createElement('button');

  container.id = id;
  deleteBtn.dataset.id = id;

  title.innerHTML = book.title;
  author.innerHTML = book.author;
  page.innerHTML = book.pages;
  statusContainer.innerHTML = book.status;
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('btn-delete');
  statusContainer.classList.add('status');

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(page);
  container.appendChild(statusContainer);
  container.appendChild(deleteBtn);

  renderCollection.appendChild(container);
};


const changeStatus = () => {
  const statusCollection = document.querySelectorAll('.status');
  statusCollection.forEach(status => {
    status.addEventListener('click', e => {
      if (e.target.innerHTML.toUpperCase() === 'READ') {
        status.innerHTML = 'Not read';
      } else {
        status.innerHTML = 'Read';
      }
    });
  });
};


const deleteCard = () => {
  const deleteBtns = [...document.querySelectorAll('.btn-delete')];
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      library.splice(e.target.dataset.id, 1);
      setLocalStorage();
      render();
    });
  });
};


export const render = () => {
  const renderCollection = document.querySelector('.books-container');
  renderCollection.innerHTML = '';
  library.forEach((book, idx) => {
    fewCard(book, idx);
  });
  deleteCard();
  changeStatus();
};


window.addEventListener('DOMContentLoaded', () => {

});
