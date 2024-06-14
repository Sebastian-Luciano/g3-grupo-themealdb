import React from 'react'
import { Link } from 'react-router-dom'
export default function CateogoriesItem({comida:{category, img}}) {
  return (
    <div className='div-cateogria'>
      <Link to={`/meals/${category}`} className='category'>
    <button className='btn-categoria'>
        <h3>{category}</h3>
        <figure className='categoria-img'>
            <img src={img} alt="" />
        </figure>
    </button>
    </Link>
    </div>
  )
}
