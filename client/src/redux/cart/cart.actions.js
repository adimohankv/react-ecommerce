import { CART } from '../constants';

export const toggleCartHidden = () => {
    return {
        type: CART.TOOGLE_CART_HIDDEN
    }
};

export const addItem = (item) => {
    return {
        type: CART.ADD_ITEM,
        payload: item
    }
};

export const removeItemFromCart = (item) => {
    return {
        type: CART.REMOVE_ITEM,
        payload: item
    }
};

export const reduceQuantity = (item) => {
    return {
        type: CART.REDUCE_QUANTITY,
        payload: item
    }
};

export const clearCart = () => {
    return {
        type: CART.CLEAR_CART
    }
};

export const setUserCartItem = (cartItems) => {
    return {
        type: CART.UPDATE_CART_ITEM,
        payload: cartItems
    }
};