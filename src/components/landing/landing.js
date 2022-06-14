import React from 'react';
import Slider from '../slider/slider';
import Categories from '../category/category';
import Products from '../products/Products';

const landing = ({goToPage}) => {
  return (
    <>
      <section className="title-content">
        <h1 className="h1-title">Explore your furtinure.</h1>
        <h3>Discover what's new.</h3>
      </section>
      <Slider />
      <Categories />
      <Products title={'Featured Products'}/>
      <div className="view-all">
        <button onClick={() => {goToPage('productList')}} className="btn-primary">
          View all products
        </button>
      </div>
    </>
  )
}

export default landing