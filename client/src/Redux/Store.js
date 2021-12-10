import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  ThunkMiddleware  from "redux-thunk";
import rootReducer from './Reducer'

const configureStore = (preloadedstate = {}) => {
  const middleware = [ThunkMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middleware)
  );
  const enhancer = [middlewareEnhancer];
  const composeEnhancer = compose(...enhancer);
  const store = createStore(rootReducer, preloadedstate, composeEnhancer);
  return store;
};


export default configureStore;
