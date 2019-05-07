const BOOKS_LOADED_SUCCESS = 'BOOKS_LOADED_SUCCESS';


const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED_SUCCESS,
    payload: newBooks
  }
};
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  }
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_ERROR',
    payload: error
  }
};

const bookId = (id) => {
  return {
    type: 'ADD_BOOK_TO_CARD',
    payload: id
  }
}

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
  bookId
};