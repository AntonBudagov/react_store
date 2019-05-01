import React, { Component } from 'react';

import BookListItem from '../book-list-item';


import './book-list.css';

class BookList extends Component {

  render() {
    const {books} = this.props;
    return(
      <ul>
        {
          books.map((item) => {
            return (
              <li key={item.id}>
                <BookListItem book={item}/>
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default BookList;
