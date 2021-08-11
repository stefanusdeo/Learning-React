import './App.css';
import Expenses from './components/Expenses/Expenses';
import React from 'react';

const App = () => {
  const datas = [
    {
      id: '1',
      keterangan: 'Asuransi Mobil',
      harga: 200000,
      date: new Date(2021, 2, 28),
    },
    {
      id: '2',
      keterangan: 'sekolah Anak',
      harga: 500000,
      date: new Date(2021, 3, 28),
    },
    {
      id: '3',
      keterangan: 'Listrik',
      harga: 200000,
      date: new Date(2021, 2, 2),
    },
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Halo World</h1>
        <Expenses items={datas} />
      </header>
    </div>
  );
};

export default App;
