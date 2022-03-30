import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import Thunk from "redux-thunk";
import RootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart"],
};

let middleware = [Thunk];

const persistedReducer = persistReducer(persistConfig, RootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
