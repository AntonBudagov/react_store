import React from 'react';
import './shopping-cart-table.css';
import connect from "react-redux/es/connect/connect";
import {bookRemoveFromCard, allBookRemoveFromCard, bookAddToCard} from "../../actions";

const ShoppingCartTable = ({items, total, inIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {id, count, title, total} = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"/>
          </button>
          <button className="btn btn-outline-success btn-sm float-right"
                  onClick={() => inIncrease(id)}>
            <i className="fa fa-plus-circle"/>
          </button>
          <button className="btn btn-outline-warning btn-sm float-right"
                  onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr>
    )
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Total</th>
          <th>Action</th>
        </tr>

        </thead>

        <tbody>
        {
          items.map(renderRow)
        }

        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};
const mapStateToProps = ( { shoppingCart: { cartItems, orderTotal} }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    inIncrease: (id) => {
      console.log('inIncrease', id);
      dispatch(bookAddToCard(id));
    },
    onDecrease: (id) => {
      console.log('onDecrease', id);
      dispatch(bookRemoveFromCard(id));
    },
    onDelete: (id) => {
      console.log('onDelete', id);
      dispatch(allBookRemoveFromCard(id));
    }
  }
}

// export default compose(
//   withBookServices(),
//   connect(mapStateToProps, mapDispatchToProps)
// )(BookListContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
