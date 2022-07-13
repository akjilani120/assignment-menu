import React from 'react';

const ProductShow = ({ order }) => {
    const {products } = order
   console.log(products)

    return (
        <div>
           {
            products.map(product => <div class="product-card mb-3 d-flex justify-content-between align-items-center">
               
            
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
                  <p>  <button className='product-order-btn'>Add</button></p>
                </div>
                
                </div>
               
        </div>)
       
           }
           
        </div>
    );
};

export default ProductShow;