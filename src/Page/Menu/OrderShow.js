import React from 'react';

const OrderShow = ({ order, quantity, setQuantity }) => {

    const { name_json, price } = order
    const mainPrice = parseFloat(price) * quantity
    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }
    const handleDecrement = () => {
        setQuantity(quantity - 1)
    }
    return (
        <div>
            <div className='d-flex '>
                <p className='cart-order-name'>{name_json.english}</p>
                <div>
                    <div className='d-flex justify-content-center text-center'>
                        <button className='cart-model' onClick={handleDecrement}>-</button>
                        <input className='cart-model input-quantity' value={quantity} readOnly ></input>
                        <button className='cart-model' onClick={handleIncrement}>+</button>
                    </div>
                </div>
              <p className='cart-price ms-1'>{mainPrice} €</p>
            </div>
        </div>
    );
};

export default OrderShow;