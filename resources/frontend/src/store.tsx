import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import AuthReducer from '../src/utilities/slices/auth/AuthSlice.tsx'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'] // only navigation will be persisted
}
// 1.
// combineReducers({
//
// })
// 2.
const rootReducer = combineReducers({
    auth: AuthReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false
        })
    )
})

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export {store,persistor}
