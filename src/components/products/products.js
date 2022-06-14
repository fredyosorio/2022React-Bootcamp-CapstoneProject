import React, {useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import './products.scss';
import productsData from '../../mocks/products.json';

const { results } = productsData;

const Products = ({title, categories, isLoadingState, setIsLoadingState}) => {

  const [productsState, setProductsState] = useState(results)


  useEffect(() => {
    setIsLoadingState(true);
    setTimeout(() => {    
      setProductsState(
        results.filter(product => {
          const { category: productCategory } = product.data;
          const selectedCategories = [];

          Object.entries(categories).forEach( ([key, value]) => {
            if(value) {
              selectedCategories.push(key.toLowerCase());
            }
          });

          if(!selectedCategories.length){ return true }
          return selectedCategories.includes(productCategory?.slug)
        })
      )
      setIsLoadingState(false);
    }, 2000)
  
  }, [categories]);
  

  function renderTitle(title) {
    return (
      <div className="title-content">
        <h1>{title}</h1>
      </div>
    );
  };

  return (
    <>
      { title ? renderTitle(title) : '' }
      <div className="section-wrapper container">

        {isLoadingState ? 'Loading' : productsState.map( product => {
          return <Card key={product.id} item={product.data}/>
        })}
      </div>
      <div className="pagination">
        <a href="/#">&laquo;</a>
        <a href="/#" className="active">1</a>
        <a href="/#">2</a>
        <a href="/#">3</a>
        <a href="/#">4</a>
        <a href="/#">5</a>
        <a href="/#">&raquo;</a>
      </div>
    </>
  )
}

Products.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.object,
  isLoadingState: PropTypes.bool,
  setIsLoadingState: PropTypes.func,
};

Products.defaultProps = {
  title: '',
  categories: {},
  isLoadingState: true,
  setIsLoadingState: () => {},
};

export default Products;