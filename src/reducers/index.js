const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 31,
      name: 'Bool 1',
      count: 2,
      total: 150
    },
    {
      id: 23,
      name: 'Bool 2',
      count: 2,
      total: 150
    }
  ],
  orderTotal: 300
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'BOOKS_LOADED_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;