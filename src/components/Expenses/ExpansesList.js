import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpansesList.css';

const ExpansesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No Data</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((datas) => (
        <ExpenseItem
          key={datas.id}
          title={datas.keterangan}
          harga={datas.harga}
          date={datas.date}
        />
      ))}
    </ul>
  );
};

export default ExpansesList;
