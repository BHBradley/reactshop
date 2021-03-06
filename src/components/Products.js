import React from "react";
import Product from './Product';

export default function Products(props) {

    const { products, add } = props;

    return ( 
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {
                    products.map((product) => (
                        <Product key={product.id} add={add} product={product}></Product>
                    ))
                }
            </div>
        </>
    )
}