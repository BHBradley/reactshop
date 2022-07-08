import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="flex">

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center min-h-screen bg-emerald-700 p-4">
        <h1 className="text-white flex flex-col text-center">
          <span className="text-5xl font-light">Brandons</span>
          <span className="text-4xl font-bold">Adventure</span>
          <span className="text-3xl font-light">Store</span>
        </h1>
      </div>

      <div className="w-full lg:w-1/2 min-h-screen p-4 flex flex-col justify-center items-start space-y-2">

        <div>
          <h2 className="text-3xl font-light my-2">Products</h2>
          <p>products listing here ...</p>
        </div>
        <div>
          <h2 className="text-3xl font-light my-2">Your Cart</h2>
          <p>Your cart is empty</p>
        </div>
      </div>

    </div>
  );
};

export default App;
