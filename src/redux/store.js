import { createStore, applyMiddleware, compose } from 'redux';
import Logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';  

import rootSaga from './root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    middleware.push(Logger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
};

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);