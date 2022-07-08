import React from 'react';
// import './App.css';

// Lets add our custom components: 
import Products from './components/Products'
import Cart from './components/Cart'

// Call the products data 
import { products } from './constants/index'

const App = () => {
  return (
    <div className="lg:flex">

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center min-h-screen bg-emerald-700 p-4">
        <h1 className="text-white flex flex-col text-center">
          <span className="text-5xl font-light">Brandon's</span>
          <span className="text-4xl font-bold">Adventure</span>
          <span className="text-3xl font-light">Store</span>
        </h1>
      </div>

      <div className="w-full lg:w-1/2 min-h-screen p-4 flex flex-col justify-center items-start space-y-2">

        <div className="w-full">
          <h2 className="text-3xl font-light my-2">Products</h2>
          <Products products={products}></Products>
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-light my-2">Your Cart</h2>
          <Cart></Cart>
        </div>

      </div>

    </div>
  );
};

export default App;
