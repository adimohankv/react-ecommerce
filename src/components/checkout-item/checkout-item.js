import React from 'react';

import './checkout-item.scss';

const CheckoutItem = (props) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.imageUrl} alt={props.item}/>
            </div>
            <span className="name">{props.name}</span>
            <span className="quantity">{props.quantity}</span>
            <span className="price">{props.price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
};

export default CheckoutItem;