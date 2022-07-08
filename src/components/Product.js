import React from "react";

export default function Product(props) {
    return ( 
        <div  className="w-full border rounded bg-gray-50 flex flex-col space-y-2 p-4">
           <div>
                <h5 className="font-bold text-md uppercase">Product name</h5>
                <p>Price: $<span>10.00</span></p>
           </div>
            <div>
                <button className="p-4 bg-black text-white rounded-full py-1 font-bold text-md">Add</button>
            </div>
        </div>
    )
}