import React from "react";
import Product from './Product';

export default function Products(props) {
    return ( 
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </>
    )
}