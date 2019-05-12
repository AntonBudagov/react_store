const BOOKS_LOADED_SUCCESS = 'BOOKS_LOADED_SUCCESS';
const FETCH_BOOKS_REQUESTED = 'FETCH_BOOKS_REQUESTED';
const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';


const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED_SUCCESS,
    payload: newBooks
  }
};
const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUESTED
  }
};
const booksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  }
};

const bookAddToCard = (id) => {
  return {
    type: 'BOOK_ADD_TO_CARD',
    payload: id
  }
};

const bookRemoveFromCard = (bookId) => {
  return {
    type: 'BOOK_REMOVE_FROM_CARD',
    payload: bookId
  }
};
const allBookRemoveFromCard = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVE_FROM_CARD',
    payload: bookId
  }
};

const inc = (id) => {
  return {
    type: 'INC_BOOK',
    payload: id
  }
};

// что бы наш компонент зависил от пораметров, а просто вызвал эту функцию без каких либо аргументов
// остольные параметры не должны касаться компонента dispatch, service
const fetchBooks = (service, dispatch) => () => {
  dispatch(booksRequested());
  service.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};

export {
  // booksLoaded,
  // booksRequested,
  // booksError,
  fetchBooks,
  bookAddToCard,
  allBookRemoveFromCard,
  bookRemoveFromCard,
  inc
};