import { USER } from '../constants';

const INITIAL_STATE = {
    currentUser : null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER.SIGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case USER.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case USER.SIGIN_FAILURE:
        case USER.SIGN_OUT_FAILURE:
        case USER.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default: 
            return state;
    }
};

export default userReducer;