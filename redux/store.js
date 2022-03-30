// import { createStore, applyMiddleware, compose } from "redux";
// import Thunk from "redux-thunk";
// import RootReducer from "./reducers/index";

// let middleware = [Thunk];

// const composeEnhancers =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   RootReducer,
//   composeEnhancers(applyMiddleware(...middleware))
// );

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
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
// let composeEnhancers = null;
// if (typeof window !== "undefined") {
//   composeEnhancers =
//     (process.env.NODE_ENV === "development"
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//       : null) || compose;
// }
const persistedReducer = persistReducer(persistConfig, RootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
