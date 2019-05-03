import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {withBookServices} from '../hoc-helper'
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import {booksLoaded, booksRequested} from '../../actions'

import './book-list.css';
import compose from "../../utils";

class BookList extends Component {


  componentDidMount() {
    // 1. get data
    const {service, booksRequested} = this.props;
    booksRequested(); // set loading true
    const data = service.getBooks().then(data => {
      this.props.booksLoaded(data);
    });
    console.log(data);

    // 2. dispatch
    // send to store

  }

  render() {
    const {books, loading} = this.props;
    if (loading) {
      return <Spinner/>
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

const mapStateToProps = ({books, loading}) => ({books, loading});
// I
const mapDispatchToProps = {
  booksLoaded,
  booksRequested
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