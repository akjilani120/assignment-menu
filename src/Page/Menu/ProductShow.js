import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const ProductShow = ({ order , cart,  setCart , isreload , setIsReload  }) => {
   
    const {products } = order 
   
    return (
        <div>
           {
            products.map( product => <ProductRow isreload={isreload} setIsReload={setIsReload} cart={cart} setCart={setCart} product={product}></ProductRow>)
       
           }
           
        </div>
    );
};

export default ProductShow;