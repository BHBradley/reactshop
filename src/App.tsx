import React from 'react';
// import './App.css';

// Lets add our custom components: 
import Products from './components/Products'
import Cart from './components/Cart'
import CartIcon from './components/CartIcon'

// Call the products data 
import { products } from './constants/index'

//Import the react useState
import { useState } from 'react';

// Import a nice background image I had in mind, for the hero
import Background from './background.jpg'

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

        [ ...cart, { ...product, quantity : 1 } ]

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

  // Background style: 
  const heroBgImgStyle = {
    backgroundImage : "url("+Background+")"
  };

    // Mobile scroll to when clicking on the view products.
  const goToProducts = () => {

    const section = document.getElementById('products');
    if (section) section.scrollIntoView( { behavior : "smooth", block : "start" } )

  }

  return (

    <div className="lg:flex">

      {/* Display a nice cart icon + amount of itms in the cart dynamically  */}
      <CartIcon cart={cart}></CartIcon>

      {/* HERO  */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-end min-h-screen bg-emerald-700 p-4 bg-no-repeat bg-cover bg-fixed bg-center" style={heroBgImgStyle}>

          <div>

            <h1 className="text-white flex flex-col text-center lg:text-right lg:mt-12">
              <span className="text-6xl lg:text-8xl font-light">Adventure</span>
              <span className="text-5xl lg:text-6xl font-bold">Store</span>
            </h1>

            <div className="block lg:hidden text-center mt-4">
              <button onClick={goToProducts} className="p-4 bg-emerald-700 text-white rounded-full py-1 font-bold text-md">View products</button>
            </div>

          </div>

      </div>

      {/* PRODUCTS and CART  */}
      <div className="w-full lg:w-1/2 min-h-screen p-4 flex flex-col justify-start items-start space-y-2 bg-gray-50">

          <div className="w-full">
            <h2 id="products" className="text-3xl font-light my-2">Products</h2>
            <Products add={add} products={products}></Products>
          </div>

          <div className="w-full">
            <h2 id="cart" className="text-3xl font-light my-2">Your Cart</h2>
            <Cart add={add} remove={remove} cart={cart}></Cart>
          </div>

      </div>

    </div>

  );
};

export default App;
