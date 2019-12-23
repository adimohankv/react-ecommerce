import { takeEvery, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/utils';
import { SHOP } from '../constants';
import { fetchCollectionSuccess, fetchCollectionsFailure} from './shop.actions';

function* onFetchCollectionsStart() {
    yield takeEvery(SHOP.FETCH_COLLECTIONS_START, fetchCollectionAsysc);
};

function* fetchCollectionAsysc() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collection = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionSuccess(collection));
    } catch(e) {
        yield put(fetchCollectionsFailure(e));
    };
};

export default function* shopSaga() {
    yield all([
        call(onFetchCollectionsStart)
    ])
};