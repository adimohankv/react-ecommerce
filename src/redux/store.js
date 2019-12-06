import { createStore, applyMiddleware, compose } from 'redux';
import Logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'

import rootReducer from './root-reducer';

const middleware = [thunk];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    middleware.push(Logger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export const persistor = persistStore(store);