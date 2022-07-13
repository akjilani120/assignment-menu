import React from 'react';
import {  useQuery } from 'react-query'
import IsLoading from '../IsLoading/IsLoading';
import ProductShow from './ProductShow';
import background from '../img/picca-1.jfif'
import './Menu.css'
const Menu = () => {
    const { isLoading, error, data } = useQuery('orderData', () =>
    fetch('https://myqa.fleksa.com/pyapi/26/menu').then(res =>
      res.json()
    )
  )
  if (isLoading) return <IsLoading></IsLoading>

 const orders = data.categories
 console.log("offers data" , data.offers)
 console.log("parts data" ,data.parts)
 console.log("sides data" ,data.sides)
    return (
        <div>
            <div className="row">
                <div className="col-12 banner" style={{ backgroundImage: `url(${background})` }} >
                  <div className="banner-overflow">
                  
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">Categorious</div>
                <div className="col-5">
                   {
                    orders.map(order => <ProductShow order ={order} key={order.id}></ProductShow>)
                   }
                </div>
                <div className="col-4">Add to card</div>
                
            </div>
        </div>
    );
};

export default Menu;