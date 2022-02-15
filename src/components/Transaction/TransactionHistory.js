import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from "../TransactionItem/TransactionItem";
import s from'./TransactionHistory.module.css';

function TransactionHistory ({type, amount,currency}){
    return(
<table className={s.history}>
  <thead>
    <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />))}
  </tbody>
</table>);
}
TransactionHistory.propTypes ={
type: PropTypes.string,
amount: PropTypes.string,
currency: PropTypes.string,
id: PropTypes.number,
};
