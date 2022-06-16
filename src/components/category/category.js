import React from 'react';
import categories from '../../mocks/product-categories.json';
import './category.scss';

const { results } = categories;

export const CategoryCard = () => {
  return (
    <section className="section-wrapper">
      <h1 className="h1-title mb-15">Categories</h1>
      <div className="category">
        { results.map(({id, data:{name,main_image}}, index) => {
          return (
            <div key={id}>
              <img
                key={id}
                alt={name}
                src={main_image.url} />
              <span key={name} className="category-name">{name}</span>
            </div>
          )
        })}
      </div>
    </section>
  );
}



export const CategoryList = ({setCategoriesState, categories}) => {

  const handleCheck = (e, categoryName) => {
    const isSelected = e.target.checked;
    setCategoriesState(
      {
        ...categories,
        [categoryName]: isSelected,
      }
    );
  };

  return (
    <>
      <span>Categories</span>
        { results.map(({id, data:{name}}) => {
          return (
            <div className="form-checkbox" key={id}>
              <input
                type="checkbox"
                id={id}
                value={name}
                onChange={(e) => {handleCheck(e, e.target.value)}}
              />
              <label htmlFor={id}>{name}</label>
            </div>
          );
        })}
    </>
  )
}