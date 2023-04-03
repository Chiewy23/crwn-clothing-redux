import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';


const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
    key: "root", //persist everything
    storage: storage, //use browser localStorage
    blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, undefined, composedEnhancers);
export const persidtor = persistStore(store);