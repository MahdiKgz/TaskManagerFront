import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthApi } from "./services/AuthAPI";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import { overViewAPI } from "./services/OverViewAPI";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["auth"],
};

// Combine reducers
const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  [overViewAPI.reducerPath]: overViewAPI.reducer,
  auth: authReducer,
  modal: modalReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(AuthApi.middleware, overViewAPI.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Create persistor
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
