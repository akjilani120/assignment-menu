import React, { useEffect, useState } from 'react';

const ProductRow = ({product , cart , setCart, isreload , setIsReload}) => {
   
    const [isVisible , setIsVisible] = useState(true)
    const [id , setId] = useState('')
    useEffect(()=>{
        const cartStore = cart.find(c => c.id === id)
        if(cartStore?.quantity>0){
            setIsVisible(false)
        }
        else{
            setIsVisible(true)
        }
    },[cart,id,isreload]) 
    // const productStore = products.map(pro => pro)
    // console.log(productStore ," product store")
    const handleAddData =(product, id) =>{
        product.quantity=1;      
        setId(id)
        setCart([...cart  , product]) 
    }
    const handleIncrement =(id) =>{
        const cartStore = cart.find(c => c.id === id)
        if(cartStore){
            cartStore.quantity+=1;
            setIsReload(!isreload)
        } 
    }
    const handleDecrement =(id) =>{
        const cartStore = cart.find(c => c.id === id)
        if(cartStore.quantity>1){
            cartStore.quantity-=1;
            setIsReload(!isreload)
        }else{
            const rest= cart.filter(c=> c.id!==id)
            setCart(rest)
        }
    }
    return (
        <div class="product-card mb-3 d-flex justify-content-between align-items-center">              
              
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
          <div> 
            {
                isVisible?
                <button  onClick={()=>handleAddData(product , product.id)} className='product-order-btn'> Add   </button>:
                   <div className='d-flex justify-content-start text-center'>
                   <button  className='quantity-model' onClick={()=>handleDecrement(product.id)}>-</button> 
                    <input className='quantity-model input-quantity' value={product?.quantity}  readOnly ></input> 
                    <button className='quantity-model'  onClick={()=>handleIncrement(product.id)}>+</button>
                   </div>
            }
                  
          </div>

        </div>
        
        </div>
       
</div>
    );
};

export default ProductRow;