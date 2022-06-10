import React from 'react'
import logo from './logo.svg';
import cart from './cart.svg';
import './header.scss';

const header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo"/>
      <nav>
        <li>
          <form>
            <input 
              className="search-input"
              placeholder="Search"
            />
          </form>
        </li>
        <li>
          <a href="/#">
            <img src={cart} alt="cart" width={"30px"} />
          </a>
        </li>
      </nav>
	  </header>
  )
}

export default header