import { SHOP } from '../constants';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/utils';

export const fetchCollectionsStart = () => {
    return {
        type: SHOP.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collection = convertCollectionsSnapshotToMap(snapshot);

            dispatch(fetchCollectionSuccess(collection));
        }).catch(error => {
            dispatch(fetchCollectionsFailure(error));
        });
    };
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

