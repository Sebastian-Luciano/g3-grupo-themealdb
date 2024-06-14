import React from 'react'

export default function CateogoriesItem({comida:{category, img}}) {
  return (
    <div className='div-cateogria'>
    <button className='btn-categoria'>
        <h3>{category}</h3>
        <figure className='categoria-img'>
            <img src={img} alt="" />
        </figure>
    </button>
    </div>
  )
}
