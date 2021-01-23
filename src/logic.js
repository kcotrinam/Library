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

const statusBgColor = (status) => {
  if (status.toUpperCase() === 'READ') {
    return `<div class="card-text status | bg-success text-white | text-center">${status}</div>`;
  }
  return `<div class="card-text status | bg-danger text-white | text-center">${status}</div>`;
};

const fewCard = (book, id) => {
  const renderCollection = document.querySelector('.books-container');

  const card = `<article clasS="card col-sm-4 col-md-3"  id=${id}>
                <div class="card-header">${book.title}</div>
                <div class="card-body">
                  <div class="card-title">${book.author}</div>
                  <div class="card-text">${book.pages}</div>
                  ${statusBgColor(book.status)}
                </div>
                <button class="btn-delete btn btn-danger" data-id=${id}>Delete</button>
                </article>  
                `;
  renderCollection.insertAdjacentHTML('beforeend', card);
};


const changeStatus = () => {
  const statusCollection = document.querySelectorAll('.status');
  statusCollection.forEach(status => {
    status.addEventListener('click', e => {
      if (e.target.innerHTML.toUpperCase() === 'READ') {
        status.innerHTML = 'Not read';
        status.classList.toggle('bg-danger');
        status.classList.toggle('bg-success');
      } else {
        status.innerHTML = 'Read';
        status.classList.toggle('bg-danger');
        status.classList.toggle('bg-success');
      }
    });
  });
};

const deleteCard = () => {
  const deleteBtns = [...document.querySelectorAll('.btn-delete')];
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const renderCollection = document.querySelector('.books-container');
      const child = document.getElementById(e.target.dataset.id);
      library.splice(e.target.dataset.id, 1);
      setLocalStorage();
      renderCollection.removeChild(child);
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
