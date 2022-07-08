import React from "react";

export default function Cart(props) {
    const {cart,add} = props;
    return ( 
        <>

            {
                cart.length === 0 && <p>Your cart is empty...</p>
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
                            </div>
                        </div>
                    )
                )

            }

        </>
    )
}