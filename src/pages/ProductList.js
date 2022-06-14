import React, { useEffect, useState } from 'react';
import Products from '../components/products/Products';
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

  const handleCheck = (e, categoryName) => {
    const isSelected = e.target.checked;

    setCategoriesState(
      {
        ...categoriesState,
        [categoryName]: isSelected,
      }
    )
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
          <span>Categories</span>
          { results.map(({id, data:{name}}, index) => {
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