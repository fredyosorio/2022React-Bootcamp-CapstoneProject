import React from 'react';
import './card.css';
import truncate from '../../utils/truncate';

const card = ({item}) => {
  return (
    <>
      <div className="card">
        <img src={item.mainimage.url} alt={item.mainimage.url} style={{width: "100%"}} />
        <h1>{truncate(item.name, 13)}</h1>
        <span>{item.category.slug}</span>
        <p className="price">${item.price}</p>
        <p className="description">{truncate(item.short_description, 100)}</p>
        <div className="card-footer">
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default card