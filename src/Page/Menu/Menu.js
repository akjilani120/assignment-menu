import React, { useState } from 'react';
import { useQuery } from 'react-query'
import IsLoading from '../IsLoading/IsLoading';
import ProductShow from './ProductShow';

import './Menu.css'
import OrderShow from './OrderShow';
const Menu = () => {
    const [quantity , setQuantity] = useState(0)  
    const [orderProduct , setOrderProduct] = useState('')
    const [id , setId] = useState('')
    const { isLoading, error, data } = useQuery('orderData', () =>
        fetch('https://myqa.fleksa.com/pyapi/26/menu').then(res =>
            res.json()
        )
    )
    if (isLoading) return <IsLoading></IsLoading>

    const orders = data.categories
    const handleAddData =(product) =>{
        
        const mainOrder = [ ...orderProduct , product]        
            setOrderProduct(mainOrder)
            setQuantity(quantity + 1)
    }
    // console.log("offers data", data.offers)
    // console.log("parts data", data.parts)
    // console.log("sides data", data.sides)
    console.log(orderProduct , "order list")
    return (
        <div className=''>
            <div className="row ">
                <div className="col-12 banner" style={{ backgroundImage: `url(https://www.massoninyc.com/wp-content/uploads/2021/11/Pizza-1.jpg)` }} >
                    <div className="banner-overflow">
                        <div>
                            <h2 className='pizza-title'>Smart Pizza Rodgau</h2>
                            <p>Italian sytle pizza , Burgers , 100% Halal</p>
                            <p className='mt-3'> Today 09:00-19:00</p>
                            <p className='mt-3'> <button className='  pizz-btn text-black '>  Pick Up</button>
                                <button className=' pizz-btn text-black '>Change Shop</button>
                            </p>
                        </div>
                        <div>
                            <p>Offer</p>
                            <p>PizzaA50 Discount of 50% on orders above 0 €
                                50 % off on everything</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row product-details ">
                <div className="col-lg-2">
                    <h3>Categorious</h3>
                </div>
                <div className="col-lg-5 col-10">
                    {
                        orders.map(order => <ProductShow quantity={quantity} setId={setId} setQuantity={setQuantity} order={order} key={order.id} handleAddData ={handleAddData }></ProductShow>)
                    }
                </div>
                <div className="col-lg-5 text-center">
                    <h3 className='add-cart'>Add to cart</h3>
                    <hr />
                    { orderProduct ?
                     <div className='order-show'>
                      {
                        orderProduct?.map(order => <OrderShow quantity={quantity} order={order} key={order.id} setQuantity={setQuantity}></OrderShow>)
                      }
                    </div> :
                    <div>
                    <img className='w-100' src="https://roma.fleksa.com/assets/svg/cart-empty.svg" alt="" />
                    <h2 className='order-about'>Please select at least one product to place an order</h2>
                </div>
                    }
                    

                </div>

            </div>
        </div>
    );
};

export default Menu;