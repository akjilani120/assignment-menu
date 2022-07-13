import React, { useState } from 'react';

const ProductShow = ({ order ,handleAddData, quantity, setQuantity , setId  }) => {
    
    const {products } = order  
    // const productStore = products.map(pro => pro)
    // console.log(productStore ," product store")
   
    const handleIncrement =() =>{
        setQuantity(quantity + 1)
    }
    const handleDecrement =() =>{
        setQuantity(quantity - 1)
    }
    return (
        <div>
           {
            products.map( product => <div class="product-card mb-3 d-flex justify-content-between align-items-center">
               
            
                <div class="mx-2">
                    <h6 class="product-title">{product.name_json.english}</h6>
                    <p className='product-discription'>{product.description_json.english}</p>                  
                    <p className='product-price'>  € {product.price}  </p>
                </div>
                <div>
                
                <div>
                {
                product.image && <img src={product.image} class="product-img" alt="product imag"/>
                }
                  <div> { quantity === 0 &&
                   <button  onClick={()=>handleAddData(product, setId(product.id))} className='product-order-btn'> Add   </button>}
                          { quantity > 0 &&
                           <div className='d-flex justify-content-start text-center'>
                           <button  className='quantity-model' onClick={handleDecrement}>-</button> 
                            <input className='quantity-model input-quantity' value={quantity} readOnly ></input> 
                            <button className='quantity-model'  onClick={handleIncrement}>+</button>
                           </div>}
                  </div>
                </div>
                
                </div>
               
        </div>)
       
           }
           
        </div>
    );
};

export default ProductShow;