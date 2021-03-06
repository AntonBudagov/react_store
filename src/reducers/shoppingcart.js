const UpdateOrder = (state, bookId, quantity) => {
  // const {books, cartItems} = state;
  const {bookList: {books}, shoppingCart: {cartItems}} = state;

  const book = books.find(({id}) => bookId === id);
  const idx = cartItems.findIndex(item => item.id === bookId);
  const item = cartItems[idx];
  const newItem = updateCartItem(item, book, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, idx)
  };
};
const updateCartItem = (item = {}, book, quantity) => {
  const {
    id = book.id,
    count = 0,
    total = 0,
    title = book.title
  } = item;

  return {
    id,
    count: count + quantity,
    total: total + quantity * book.price,
    title
  }
};
const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.splice(0, idx), // slice ?
      ...cartItems.splice(idx + 1) // slice ?
    ]
  }
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



const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return  {
      cartItems: [],
      orderTotal: 0
    }
  }
  switch (action.type) {
    case 'BOOK_ADD_TO_CARD':
      // const bookId = action.payload;
      // const book = state.books.find(book => bookId === book.id);
      // const idx = state.cartItems.findIndex(item => item.id === bookId);
      // const item = state.cartItems[idx];
      // const newItem = updateCartItem(item, book);
      //
      // return {
      //   ...state,
      //   cartItems: updateCartItems(state.cartItems, newItem, idx)
      // };
      return UpdateOrder(state, action.payload, 1);

    case 'BOOK_REMOVE_FROM_CARD':
      return  UpdateOrder(state, action.payload, -1);

    case 'ALL_BOOK_REMOVE_FROM_CARD':
      // const index = state.cartItems.findIndex(({id}) => id === action.payload);
      // const newArray = [...state.cartItems.slice(0, index), ...state.cartItems.slice(index + 1)];
      // return {
      //   ...state,
      //   cartItems: [...newArray]
      // };
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return UpdateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart