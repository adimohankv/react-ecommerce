import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';

const CartDropdown = (props) => {
    console.log(props);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    props.cartItems.length
                        ? props.cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem}/>)
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button 
                onClick={() => {
                    props.history.push('/checkout')
                    props.dispatch(toggleCartHidden())
                }}
            >
                Go to Checkout
            </Button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return  {
        cartItems: selectCartItems(state)
    };
}

export default withRouter(connect(mapStateToProps)(CartDropdown));