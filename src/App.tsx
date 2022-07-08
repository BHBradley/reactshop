import React from 'react';
// import './App.css';

// Lets add our custom components: 
import Products from './components/Products'
import Cart from './components/Cart'

// Call the products data 
import { products } from './constants/index'


//Import the react useState
import { useState } from 'react';


const App = () => {

  const [cart,setCart] = useState<({ id: number, quantity: number, name: string, price: number }[])>([]);

  /**
   * Create the "add" to cart function 
   * WE increment the quantity of each product item in the cart ( if it exists ) 
   * Or, we add the product to the cart with quantity : 1 
  */
  const add = (
    product : { id: number, quantity: number, name: string, price: number }
  ) => {

    const exists = cart.find(
      (x : { id: number, quantity: number, name: string, price: number } ) => 
      x.id === product.id 
    )

    if (exists) 
    {
      // It exists! Let us increment the quantity of this listing in the cart using setCart()...
      setCart(

        cart.map(
          ( x ) => 
          x.id === product.id ? 
          { ...exists, quantity : exists.quantity + 1 } : x
        )

      )

    }
    else 
    {
      // It does not exists! Let us add the product and quantity of 1 to the listing in the cart using setCart()...
      setCart(

        [ ...cart, { ...product, quantity : 1 }]

      )

    }
  
  }

  /**
   * Create the "remove" from cart function 
   * Check if item exists in the cart 
   * If 1 item is left of this product remove it
   * Or, if multiple items still exist subtract 1 from quantity 
  */
  const remove = (
    product : { id: number, quantity: number, name: string, price: number }
  ) => {

    const exists = cart.find(
      (x : { id: number, quantity: number, name: string, price: number } ) => 
      x.id === product.id 
    )

    console.log(exists)

    if (exists) 
    {

      if (exists.quantity === 1) 
      {

        // 1 of this product exists ... Let us remove it entirely... 
        // We can use filter to only include the products that do not have this products ID
        setCart(

          cart.filter(
            (x) => x.id !== product.id
          )

        )

      } 
      else 
      { 

        // We have multiple items of this product in the cart ... 
        // We can use the map method to modify it and subtract 1 from the quantity
        setCart(

          cart.map(
            (x) => x.id === product.id ? 
            { ...exists, quantity : exists.quantity -1 } : x
          )

        )
      }
     
    }

  }

  return (
    <div className="lg:flex">

      {/* HERO  */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center min-h-screen bg-emerald-700 p-4">

          <h1 className="text-white flex flex-col text-center">
            <span className="text-5xl font-light">Brandon's</span>
            <span className="text-4xl font-bold">Adventure</span>
            <span className="text-3xl font-light">Store</span>
          </h1>

      </div>

      {/* PRODUCTS and CART  */}
      <div className="w-full lg:w-1/2 min-h-screen p-4 flex flex-col justify-start items-start space-y-2">

          <div className="w-full">
            <h2 className="text-3xl font-light my-2">Products</h2>
            <Products add={add} products={products}></Products>
          </div>

          <div className="w-full">
            <h2 className="text-3xl font-light my-2">Your Cart</h2>
            <Cart add={add} remove={remove} cart={cart}></Cart>
          </div>

      </div>

    </div>
  );
};

export default App;
