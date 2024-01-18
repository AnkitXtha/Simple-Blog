import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signup/signupSlice";
import loginSlice from "./reducers/login/loginSlice";
import logoutSlice from "./reducers/logout/logoutSlice";
import blogSlice from "./reducers/blog/blogSlice";
import { persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({
    signup: signupSlice,
        login: loginSlice,
        logout: logoutSlice,
        blog: blogSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type AppDispatch = typeof store.dispatch
export default store;
