import React from 'react'
import Slider from './slider/slider';
import Categories from './category';
import Products from './products/products';

const content = () => {
  return (
    <>
      <section className="title-content">
        <h1 className="h1-title">Explore your furtinure.</h1>
        <h3>Discover what's new.</h3>
      </section>
      <Slider />
      <Categories />
      <Products />
    </>
  );
}

export default content;