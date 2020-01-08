import { put, takeLatest, all, call } from 'redux-saga/effects';

import { USER } from '../constants';
import { provider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/utils';
import { signInSuccess, 
        signInFailure, 
        signOutSuccess, 
        signOutFailure, 
        signUpFailure
    } from './user.actions';

function* getUserSnapshot(user, aditionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, aditionalData);

        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
        yield put(signInFailure(error));
    }
};

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(provider);
        
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

function* checkUserSession() {
    try {
        const userAuth = yield call(getCurrentUser);

        if (!userAuth) {
            return;
        }

        yield call(getUserSnapshot, userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

function* signOut() {
    try {
        yield auth.signOut();

        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
};

function* signUp({payload: {email, password, displayName}}) {
    try {
        const user = yield auth.createUserWithEmailAndPassword(email, password);

        yield getUserSnapshot(user.user, {displayName});
    } catch(error) {
        yield put(signUpFailure(error));
    }
};

function* onEmailSignInStart() {
    yield takeLatest(USER.EMAIL_SIGIN_START, signInWithEmail);
};

function* onGoogleSignInStart() {
    yield takeLatest(USER.GOOGLE_SIGIN_START, signInWithGoogle)
};

function* onUserSession() {
    yield takeLatest(USER.CHECK_USER_SESSION, checkUserSession)
};

function* onUserSignOutStart() {
    yield takeLatest(USER.SIGN_OUT_START, signOut)
};

function* onUserSignUpStart() {
    yield takeLatest(USER.SIGN_UP_START, signUp);
};

export default function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onUserSession),
        call(onUserSignOutStart),
        call(onUserSignUpStart)
    ])
}