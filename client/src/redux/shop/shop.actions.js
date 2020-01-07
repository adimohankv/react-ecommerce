import { SHOP } from '../constants';

export const fetchCollectionsStart = () => {
    return {
        type: SHOP.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionSuccess = (collections) => {
    return {
        type: SHOP.FETCH_COLLECTIONS_SUCCESS,
        payload: collections
    }
};

export const fetchCollectionsFailure = (error) => {
    return {
        type: SHOP.FETCH_COLLECTIONS_ERROR,
        payload: error
    }
};

