import React, { useEffect, useState } from 'react';

const OrderShow = ({cart , setCart, order , isreload , setIsReload }) => {
    let { name_json, price , quantity , id } = order;
    const [total, setTotal]= useState(price)
    
    useEffect(()=>{
        const mainPrice = parseFloat(price) * quantity
        const mainBalance= mainPrice.toFixed(2)
        let total = 0;
            total = total + mainPrice
            console.log("total balance" , total)
        setTotal(mainBalance)
    },[order,quantity,price, isreload]) 

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
        <div>
            <div className='d-flex '>
                <p className='cart-order-name'>{name_json.english}</p>
                <div>
                    <div className='d-flex justify-content-center text-center'>
                        <button className='cart-model' onClick={()=>handleDecrement(id)}>-</button>
                        <input className='cart-model input-quantity' value={quantity} readOnly ></input>
                        <button className='cart-model' onClick={()=>handleIncrement(id)}>+</button>
                    </div>
                </div>
              <p className='cart-price ms-1'>{total} €</p>
            </div>
            <div>              
            </div>
           {/* <h1>Total order</h1> */}
        </div>
    );
};

export default OrderShow;