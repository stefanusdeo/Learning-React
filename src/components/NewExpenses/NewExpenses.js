import React, { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
  const [clickShow, setClickShow] = useState(false);
  const dataHandler = (expanseData) => {
    const data = {
      ...expanseData,
      id: Math.random().toString(),
    };

    props.onAddExpanse(data);
    setClickShow(false);
  };

  const showClickHandler = () => {
    setClickShow(true);
  };

  const stopShowing = () => {
    setClickShow(false);
  };

  return (
    <div className='new-expense'>
      {!clickShow && <button onClick={showClickHandler}>Add Data</button>}
      {clickShow && (
        <ExpensesForm onClick={stopShowing} onExpanseData={dataHandler} />
      )}
    </div>
  );
};

export default NewExpenses;
