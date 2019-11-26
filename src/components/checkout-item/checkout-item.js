import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart, addItem, reduceQuantity } from '../../redux/cart/cart.actions';

import './checkout-item.scss';

const CheckoutItem = (props) => {
    const {imageUrl, name, quantity, price} = props.cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>props.reduceQuantity(props.cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>props.increaseQuantity(props.cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => props.removeItem(props.cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch(removeItemFromCart(item)),
        increaseQuantity: (item) => dispatch(addItem(item)),
        reduceQuantity: (item) => dispatch(reduceQuantity(item))
    }
};

export default connect(null, mapDispatchToProps)(CheckoutItem);