import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { productData1, productData2 } from "./components/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Hero />
      <Products heading="Choose your favorite" data={productData1} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productData2} />
      <Footer />
    </Router>
  );
}

export default App;
