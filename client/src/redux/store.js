import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import  storageSession  from "redux-persist/lib/storage/session";
import rootReducer from "./reducers";

//To config the persist reducer
const persistconfig = { key: "root", storage: storageSession };

// Combining the reducer to be persisted
const persistentReducer = persistReducer(persistconfig, rootReducer);

export default function myStore(preloadedState = {}) {
  const middleWare = [thunkMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middleWare)
  );
  const enhancers = [middlewareEnhancer];
  const composeEnhancer = compose(...enhancers);
  const store = createStore(persistentReducer, preloadedState, composeEnhancer);
  return store;
}

//compose debugging tools
// createStore to store the initial state
// middleware to ease the asyn function
