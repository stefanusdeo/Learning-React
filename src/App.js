import './App.css';
import Expenses from './components/Expenses/Expenses';
import React, { useState } from 'react';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DummyDatas = [
  {
    id: '1',
    keterangan: 'Asuransi Mobil',
    harga: 20.0,
    date: new Date(2020, 2, 28),
  },
  {
    id: '2',
    keterangan: 'sekolah Anak',
    harga: 50.0,
    date: new Date(2021, 3, 28),
  },
  {
    id: '3',
    keterangan: 'Listrik',
    harga: 15.0,
    date: new Date(2021, 2, 2),
  },
];

const App = () => {
  const [datas, setDatas] = useState(DummyDatas);

  const addExpanseHandler = (expanses) => {
    console.log(expanses);
    setDatas((prevData) => {
      return [expanses, ...prevData];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpanse={addExpanseHandler} />
      <Expenses items={datas} />
    </div>
  );
};

export default App;
