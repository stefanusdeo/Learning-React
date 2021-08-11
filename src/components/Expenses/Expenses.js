import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import '../Expenses/Expenses.css';
import React from 'react';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].keterangan}
        harga={props.items[0].harga}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].keterangan}
        harga={props.items[1].harga}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].keterangan}
        harga={props.items[2].harga}
        date={props.items[2].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
