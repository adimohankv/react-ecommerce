import { USER } from '../constants';

export const googleSignInStart = () => {
    return {
        type: USER.GOOGLE_SIGIN_START
    }
};

export const signInSuccess = (user) => {
    return {
        type: USER.SIGIN_SUCCESS,
        payload: user
    }
}

export const signInFailure = (error) => {
    return {
        type: USER.SIGIN_FAILURE,
        payload: error
    }
}

export const emailSignInStart = (credentials) => {
    return {
        type: USER.EMAIL_SIGIN_START,
        payload: credentials
    }
};

export const signOutStart = () => {
    return {
        type: USER.SIGN_OUT_START
    }
};

export const signOutSuccess = () => {
    return {
        type: USER.SIGN_OUT_SUCCESS
    }
};

export const signOutFailure = (error) => {
    return {
        type: USER.SIGN_OUT_FAILURE,
        payload: error
    }
};


export const checkUserSession = () => {
    return {
        type: USER.CHECK_USER_SESSION,
    }
};

export const signUpStart = (credentials) => {
    return {
        type: USER.SIGN_UP_START,
        payload: credentials
    }
};

export const signUpSuccess = () => {
    return {
        type: USER.SIGN_UP_SUCCESS
    }
};

export const signUpFailure = (error) => {
    return {
        type: USER.SIGN_UP_FAILURE,
        payload: error
    }
};