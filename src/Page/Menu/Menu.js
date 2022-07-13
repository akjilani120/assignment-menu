import React, { useState } from 'react';
import { useQuery } from 'react-query'
import IsLoading from '../IsLoading/IsLoading';
import ProductShow from './ProductShow';

import './Menu.css'
const Menu = () => {
    const [quantity , setQuantity] = useState(0)  
    const { isLoading, error, data } = useQuery('orderData', () =>
        fetch('https://myqa.fleksa.com/pyapi/26/menu').then(res =>
            res.json()
        )
    )
    if (isLoading) return <IsLoading></IsLoading>

    const orders = data.categories
    const handleAddData =(product) =>{
            console.log("order data" , product)
            setQuantity(quantity + 1)
    }
    // console.log("offers data", data.offers)
    // console.log("parts data", data.parts)
    // console.log("sides data", data.sides)
    return (
        <div>
            <div className="row">
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
            <div className="row">
                <div className="col-3">Categorious</div>
                <div className="col-lg-5 col-10">
                    {
                        orders.map(order => <ProductShow quantity={quantity} setQuantity={setQuantity} order={order} key={order.id} handleAddData ={handleAddData }></ProductShow>)
                    }
                </div>
                <div className="col-4">Add to card</div>

            </div>
        </div>
    );
};

export default Menu;