import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {withBookServices} from '../hoc-helper'
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import {booksLoaded, booksRequested, booksError} from '../../actions'

import './book-list.css';
import compose from "../../utils";
import ErrorIndicator from "../error-indicator/error-indicator";

class BookList extends Component {


  componentDidMount() {
    // 1. get data
    const {
      service,
      booksLoaded,
      booksRequested,
      booksError,
    } = this.props;
    booksRequested(); // set loading true
    const data = service.getBooks().then(data => {
      booksLoaded(data);
    }).catch((error) => booksError(error));
    console.log(data);

    // 2. dispatch
    // send to store

  }

  render() {
    const {books, loading, error} = this.props;
    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <ErrorIndicator/>
    }
    return (
      <ul className="list-group">
        {
          books.map((item) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <BookListItem book={item}/>
              </li>
            )
          })
        }
      </ul>
    )
  }

}

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});
// I
const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};
//II
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     booksLoaded
//   }, dispatch)
// };
//III
// const mapDispatchToProps = (dispatch) => ({
//
//   booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks))
// });
//
//   // return {
//   //   booksLoaded: (newBooks) => {
//   //     dispatch({
//   //       type: 'BOOKS_LOADED',
//   //       payload: newBooks
//   //     })
//   //   }
//
// // }
// export default withBookServices()(connect(mapStateToProps, mapDispatchToProps)(BookList));

export default compose(withBookServices(), connect(mapStateToProps, mapDispatchToProps))(BookList)