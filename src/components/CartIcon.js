import React from "react";

export default function CartIcon(props) {

    const {cart} = props;

    // Use reduce to get the sum of all items quantity
    const totalQuantity = cart.reduce((a,b) => a + b.quantity, 0)

    // Handy scroll to when clicking on the cart icon.
    const goToCart = () => {
        const section = document.getElementById('cart');
        if (section) section.scrollIntoView( { behavior : "smooth", block : "start" } )
    }

    return ( 
        <div className="fixed top-1 right-1 w-12 h-12 bg-emerald-700 text-white flex items-center justify-center rounded cursor-pointer" onClick={goToCart}>
        <div className="relative">
          {cart.length > 0 && <div className="absolute -top-2 right-1 bg-red-500 w-5 h-5 rounded-full flex justify-center items-center text-xs font-bold">{totalQuantity}</div>}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
    )
    
}