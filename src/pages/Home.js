import React, { useState } from 'react';
import Header from "../components/header/header";
import Content from "../components/content/content";
import Footer from "../components/footer/footer";
import Landing from "../components/landing/landing";
import ProductList from "../pages/ProductList";

function Home() {

	const [currentPageState, setCurrentPageState] = useState("home");
  
  const pageMapping = {
    "home": <Landing goToPage={setCurrentPageState} />,
    "productList": <ProductList />,
  };

	return (
		<>
			<Header goToPage={setCurrentPageState}/>
      <Content page={pageMapping[currentPageState]} />
			<Footer />
		</>
	);
}

export default Home;