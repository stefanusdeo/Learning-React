import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpansesList from './ExpansesList';
import ExpanseChart from './ExpanseChart';

const Expenses = (props) => {
  const [filterEnter, SetFilterEnter] = useState('2020');

  function filterChange(selectedYear) {
    SetFilterEnter(selectedYear);
  }

  const filterExpanses = props.items.filter((datas) => {
    return datas.date.getFullYear().toString() === filterEnter;
  });

  return (
    <li>
      <Card className='expenses'>
        <div>
          <ExpensesFilter
            onChangeFilter={filterChange}
            selected={filterEnter}
          />
        </div>
        <ExpanseChart expanses={filterExpanses}/>
        <ExpansesList items={filterExpanses} />
      </Card>
    </li>
  );
};

export default Expenses;
