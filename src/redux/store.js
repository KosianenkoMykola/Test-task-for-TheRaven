import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./productsSlice";

const persistedProductsReducer = persistReducer(
  {
    key: "products",
    storage,
    whitelist: ['items'],
  },
  productsReducer
);

export const store = configureStore({
  reducer: {
    product: persistedProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
