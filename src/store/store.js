import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';


const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

const persistConfig = {
    key: "root",        // persist everything
    storage: storage,   // use browser localStorage
    blacklist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);