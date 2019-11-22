import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = (props) => {
    console.log(props);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    props.cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem}/>)
                }
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
};

const mapStateToProps = ({cart: {cartItems}}) => {
    return  {cartItems};
}

export default connect(mapStateToProps)(CartDropdown);