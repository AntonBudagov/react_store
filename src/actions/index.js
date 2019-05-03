const BOOKS_LOADED = 'BOOKS_LOADED'


const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  }
};
const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
};

export {
  booksLoaded,
  booksRequested
};