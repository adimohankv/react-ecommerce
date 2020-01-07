import { all, call, put, takeLatest } from 'redux-saga/effects';

import { USER } from '../constants';
import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
    yield put(clearCart());
};

function* onSignOutSuccess() {
    yield takeLatest(USER.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export default function* cartSaga() {
    yield all([
        call(onSignOutSuccess)
    ])
}