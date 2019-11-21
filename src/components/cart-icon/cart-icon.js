import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.scss';

const CartIcon = ({toogleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toogleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        toogleCartHidden: () => dispatch(toggleCartHidden())
    }
} 

export default connect(null, mapDispatchToProps)(CartIcon);