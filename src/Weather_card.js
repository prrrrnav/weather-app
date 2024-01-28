import React from 'react';
import './Weather_head.css';

const Weather_card = ({ index, icon, condition, place, temperature, farenheit }) => {
  return (
    <div className='card' key={index}>
      <h2>{place}</h2>
      <img src={icon} alt={condition} />
      <p>{condition}</p>
      <p>{temperature}°C / {farenheit}°F</p>
    </div>
  );
};

export default Weather_card;
