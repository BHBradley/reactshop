import React from "react";

export default function Cart(props) {

    const {cart,add,remove} = props;

    const cartTotal = cart.reduce( (a,b) => a + b.quantity * b.price, 0).toFixed(2);

    const checkout = () => {
        alert('Thank you for your purchase')
    }

    return ( 
        <>

            {
                cart.length === 0 && <p>Your cart is empty...</p>
            }

            {
                cartTotal > 0 && 
                <div className="flex w-full bg-gray-50 rounded p-4 border my-2 justify-between items-center">
                    <h2 className="flex flex-col text-md">
                        <span  className="font-bold">Cart Total</span> 
                        <span className="font-bold text-emerald-700 text-xl">${cartTotal}</span>
                    </h2>
                    <div>
                        <button onClick={checkout} className="p-4 bg-emerald-700 text-white rounded-full py-1 font-bold text-md">Checkout</button>
                    </div>
                </div>
            }

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {
                    cart.map( 
                        (product) => ( 
                            <div  key={product.id} className="w-full border rounded bg-gray-50 flex flex-col space-y-2 p-4">
                                <div>
                                    <h5 className="font-bold text-md uppercase">{product.name}</h5>
                                    <p className="text-xs">Price: $<span>{product.price.toFixed(2)}</span></p>
                                </div>
                                <div className="flex justify-start items-center space-x-1">
                                    <button onClick={() => add(product)} className="p-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-md">+</button>
                                    <span className="font-semibold bg-gray-100 rounded border flex items-center justify-center w-12 text-xs h-6">{product.quantity}</span>
                                    <button onClick={() => remove(product)} className="p-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center font-bold text-md">-</button>
                                </div>
                                <p className="text-xs flex flex-col">
                                    <span><span className="font-semibold">{product.name}</span> <span> total:</span></span> 
                                    <span className="font-semibold text-emerald-700">{(product.price *product.quantity).toFixed(2)}</span>
                                </p>
                            </div>
                        )
                    )
                }
            </div>

        </>
    )
}