import React from 'react';
import categories from '../mocks/product-categories.json';

const { results } = categories;

const category = () => {
  return (
    <section className="section-wrapper">
      <h1 className="h1-title mb-15">Categories</h1>
      <div className="category">
        
        {results.map((category, index) => {
          return (
            <div key={category.id}>
              <img
                key={category.id}
                alt={category.data.name}
                src={category.data.main_image.url} />
              <span key={category.data.name} className="category-name">{category.data.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default category