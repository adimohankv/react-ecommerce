import { USER } from '../constants';

export const setCurrentUser = (user) => {
    return {
        type: USER.SET_CURRENT_USER,
        payload: user
    }
}