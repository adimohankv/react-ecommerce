import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import { updateCartItems, getCartItems } from '../../firebase/utils';
import { USER } from '../constants';
import { CART } from '../constants';
import { clearCart, setUserCartItem } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import { selectCurrentUser } from '../user/user.selector';

function* clearCartOnSignOut() {
    yield put(clearCart());
};

function* getUserCartData() {
    const { id } = yield select(selectCurrentUser);
    const cartItems = yield getCartItems(id);
    
    yield put(setUserCartItem(cartItems));
};

function* updateUserCart() {
    const { id } = yield select(selectCurrentUser);
    const cartItems = yield select(selectCartItems);
    
    yield updateCartItems(id, cartItems);
};

function* onSignOutSuccess() {
    yield takeLatest(USER.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

function* onSignInSuccess() {
    yield takeLatest(USER.SIGIN_SUCCESS, getUserCartData);
};

function* onCartStateChange() {
    yield takeLatest([
        CART.REDUCE_QUANTITY,
        CART.REMOVE_ITEM,
        CART.ADD_ITEM
    ], updateUserCart)
}

export default function* cartSaga() {
    yield all([
        call(onSignOutSuccess),
        call(onSignInSuccess),
        call(onCartStateChange)
    ])
}