import React from 'react';
import PropTypes from 'prop-types';
import s from "./TransactionItem.module.css";

function TransactionItem ({type, amount,currency}){
    return(
    <tr className={s.item}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
    );
  }

  TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
   };
  export default TransactionItem;