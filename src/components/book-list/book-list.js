import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {withBookServices} from '../hoc-helper'
import BookListItem from '../book-list-item';
import {booksLoaded} from '../../actions'

import './book-list.css';
import compose from "../../utils";

class BookList extends Component {


  componentDidMount() {
    // 1. get data
    const {service} = this.props;
    const data = service.getBooks();

    // 2. dispatch
    // send to store
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
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

const mapStateToProps = ({books}) => ({books});
// I
const mapDispatchToProps = {
  booksLoaded
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