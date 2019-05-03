import React from 'react';
import BookList from '../book-list/book-list';
import ShoppingCartTable from '../shopping-cart-table'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <BookList/>
      <ShoppingCartTable/>
    </div>
  )

}

export default HomePage