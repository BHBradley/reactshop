import React from "react";

export default function Product(props) {

    const {product, add} = props;

    return ( 
        <div className="w-full border rounded bg-gray-200  flex justify-center items-center">
            <div className="w-2/3 p-4">
                <h5 className="font-bold text-md uppercase">{product.name}</h5>
                <p>Price: $<span>{product.price.toFixed(2)}</span></p>
                <div>
                    <button onClick={() => add(product)} className="p-4 bg-black text-white rounded-full py-1 font-bold text-xs">Add</button>
                </div>
           </div>
           <div className="bg-gray-300 w-1/3 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    )
}