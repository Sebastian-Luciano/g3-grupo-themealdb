import React from 'react';

export default function CardItem({ strMeal, img }) {
  return (
    <div className='card'>
      <div className="card-img">
      <img src={img} className="img-food" alt={strMeal} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
      </div>
    </div>
  );
}