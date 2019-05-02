const BOOKS_LOADED = 'BOOKS_LOADED'


const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  }
};
// const booksLoading = (load) => {
//   return {
//     type: 'LOADING',
//     payload: load
//   }
// };

export {
  booksLoaded,
  // booksLoading
};