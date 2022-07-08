import React from "react";

export default function Product(props) {

    const {product, add} = props;

    return ( 
        <div className="w-full border rounded bg-gray-50 flex flex-col justify-start items-start space-y-1 p-4">
           <div>
                <h5 className="font-bold text-md uppercase">{product.name}</h5>
                <p>Price: $<span>{product.price.toFixed(2)}</span></p>
           </div>
            <div>
                <button onClick={() => add(product)} className="p-4 bg-black text-white rounded-full py-1 font-bold text-xs">Add</button>
            </div>
        </div>
    )
}