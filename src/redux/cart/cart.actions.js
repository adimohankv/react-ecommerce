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