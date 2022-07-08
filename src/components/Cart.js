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
                    <h2 className="flex flex-col text-xl">
                        <span>Cart Total</span> 
                        <span className="font-bold">${cartTotal}</span>
                    </h2>
                    <div>
                        <button onClick={checkout} className="p-4 bg-emerald-700 text-white rounded-full py-1 font-bold text-md">checkout</button>
                    </div>
                </div>
            }

            {

                cart.map( 
                    (product) => ( 
                        <div  key={product.id} className="w-full border rounded bg-gray-50 flex flex-col space-y-2 p-4">
                            <div>
                                <h5 className="font-bold text-md uppercase">{product.name}</h5>
                                <p>Price: $<span>{product.price.toFixed(2)}</span></p>
                                <p>Quantity: <span>{product.quantity}</span></p>
                            </div>
                            <div>
                                <button onClick={() => add(product)} className="p-4 bg-black text-white rounded-full py-1 font-bold text-md">Add</button>
                                <button onClick={() => remove(product)} className="p-4 bg-black text-white rounded-full py-1 font-bold text-md">remove</button>
                            </div>
                        </div>
                    )
                )

            }

        </>
    )
}