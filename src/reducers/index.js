const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  // cartItems: [
  //   {
  //     id: 31,
  //     name: 'Bool 1',
  //     count: 2,
  //     total: 150
  //   },
  //   {
  //     id: 23,
  //     name: 'Bool 2',
  //     count: 2,
  //     total: 150
  //   }
  // ],
  orderTotal: 300
};

const updateCartItem = (item = {}, book, inc = false) => {
  if (!inc) {
    const {
      id = book.id,
      count = 0,
      total = 0,
      title = book.title
    } = item;
    return {
      id,
      count: count + 1,
      total: total + book.price,
      title
    }
  } else {
    return {
      ...item,
      count: item.count + 1,
      total: item.total + book.price,
    }
  }
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.splice(0, idx), // slice ?
    item,
    ...cartItems.splice(idx + 1) // slice ?
  ]
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
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
    case 'ADD_BOOK_TO_CARD':
      const bookId = action.payload;
      const book = state.books.find(book => bookId === book.id);
      const idx = state.cartItems.findIndex(item => item.id === bookId);
      const item = state.cartItems[idx];
      const newItem = updateCartItem(item, book);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, idx)
      };
    case 'DELETE_BOOK_FROM_CARD':
      const index = state.cartItems.findIndex(({id}) => id === action.payload);
      console.log('DELETE_BOOK_FROM_CARD', index);
      const newArray = [...state.cartItems.slice(0, index), ...state.cartItems.slice(index + 1)];
      return {
        ...state,
        cartItems: [...newArray]
      };
    case 'INC_BOOK':
      console.log('INC_BOOK', action.payload);
      const incIndex = state.cartItems.findIndex(({id}) => id === action.payload);
      const _item = state.cartItems[incIndex];
      const _book = state.books.find(book => action.payload === book.id);
      let d = updateCartItem(_item, _book, true)
      console.log(d);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, d, incIndex)
      };
    default:
      return state;
  }
};

export default reducer;