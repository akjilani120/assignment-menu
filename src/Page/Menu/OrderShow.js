import React from 'react';

const OrderShow = ({order}) => {
    console.log("share order" , order)
    return (
        <div>
            <h5>{order.name_json.english}</h5>
            <h5>{order.price}</h5>
        </div>
    );
};

export default OrderShow;