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

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["auth"],
};

// Combine reducers
const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  auth: authReducer,
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
    }).concat(AuthApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Create persistor
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
