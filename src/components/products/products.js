import React from 'react'
import Card from './card';
import productsData from '../../mocks/products.json';

const { results } = productsData;

const products = () => {
  return (
    <>
      <div className="title-content">
        <h1>Featured Products</h1>
      </div>
      <div className="section-wrapper container">
        {results.map((item, index) => {
          return <Card key={item.id} item={item.data}/>
        })}
      </div>
    </>
  )
}

export default products