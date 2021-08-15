import React from 'react';

import './Cart.css';
import CartBar from './CartBar';

const Cart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoints) => dataPoints.value);
  const totalMax = Math.max(...dataPointValue);
  
  return (
    <div className='chart'>
      {props.dataPoints.map((datapoint) => (
        <CartBar
          key={datapoint.key}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Cart;
