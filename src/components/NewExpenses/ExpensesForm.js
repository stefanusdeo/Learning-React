import React, { useState } from 'react';

import './ExpensesForm.css';

const ExpensesForm = (props) => {
  //   const [userinput, SetUserInput] = useState({
  //     titleInput: '',
  //     amountInput: '',
  //     dateInput: '',
  //   });

  const [titelEnter, SetTitleEnter] = useState('');
  const [amountEnter, SetAmountEnter] = useState('');
  const [dateEnter, SetDateEnter] = useState('');

  const titleHandler = (event) => {
    // SetUserInput = {
    //   ...userinput,
    //   titleInput: event.target.value,
    // };

    SetTitleEnter(event.target.value);
  };

  const amountHandler = (event) => {
    // SetUserInput = {
    //   ...userinput,
    //   amountInput: event.target.value,
    // };

    SetAmountEnter(event.target.value);
  };

  const dateHandler = (event) => {
    // SetUserInput = {
    //   ...userinput,
    //   dateInput: event.target.value,
    // };

    SetDateEnter(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      keterangan: titelEnter,
      harga: +amountEnter,
      date: new Date(dateEnter),
    };

    props.onExpanseData(inputData);
    SetTitleEnter('');
    SetDateEnter('');
    SetAmountEnter('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__control'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            autoFocus
            value={titelEnter}
            onChange={titleHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            step='10000'
            value={amountEnter}
            onChange={amountHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2021-08-11'
            value={dateEnter}
            onChange={dateHandler}
            required
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onClick}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
