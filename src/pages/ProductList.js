import React, { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import { CategoryList } from '../components/category/category';
import filter from '../components/productList/filter.svg';
import '../components/productList/productList.scss';
import categories from '../mocks/product-categories.json';

const ProductList = () => {

  const { results } = categories;
  const categoriesData = results.map(cat => cat.data);
  const [isLoadingState, setIsLoadingState] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [renderNav, setrenderNav] = useState(false);

  const [categoriesState, setCategoriesState] = useState(Object.fromEntries(
    categoriesData.map((cat) => {
      return [cat.name, false]
    })
  ));

  const openNav = () => {
    setrenderNav(true)
  };

  const closeNav = () => {
    setrenderNav(false)
  };
  
  return (
    <>
      <section className="title-content">
          <h1 className="h1-title">This is the Product List Page</h1>
          <button onClick={() => openNav()} className="btn-primary btn-icon mt-3">
            <img src={filter} alt="filter" width={"30px"} />
            <span>Filters</span>
          </button>
      </section>
      <div className="sidenav" style={{ "display": renderNav ? "" : "none"  }}>
        <span className="closebtn" onClick={() => closeNav()}>&times;</span>
        <CategoryList 
          setCategoriesState={setCategoriesState}
          categories={categoriesState}
        />
      </div>
      <Products
        categories={categoriesState}
        isLoadingState={isLoadingState}
        setIsLoadingState={setIsLoadingState}
      />
    </>
  );
}

export default ProductList;