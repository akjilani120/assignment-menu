import React from 'react';
import {  useQuery } from 'react-query'
import IsLoading from '../IsLoading/IsLoading';
const Menu = () => {
    const { isLoading, error, data } = useQuery('orderData', () =>
    fetch('https://myqa.fleksa.com/pyapi/26/menu').then(res =>
      res.json()
    )
  )
  if (isLoading) return <IsLoading></IsLoading>
  if (error) return  error.message
  console.log("order data" , data)
    return (
        <div>
            <div className="row">
                <div className="col-3">Categorious</div>
                <div className="col-5">
                    {
                        data.map(order => order)
                    }
                </div>
                <div className="col-4">Add to card</div>
                
            </div>
        </div>
    );
};

export default Menu;