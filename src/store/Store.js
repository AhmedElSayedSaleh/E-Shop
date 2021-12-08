import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import data from "../data/data";

const initialState = { products: data };
const reducer = (state, action) => {
  return state;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
