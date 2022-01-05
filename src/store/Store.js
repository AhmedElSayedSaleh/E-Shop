import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  productsReducer,
  bagsReducer,
  jewelryReducer,
  shoesReducer,
  // productsFilteredReducer,
} from "./reducers/productReducers";

const reducers = combineReducers({
  getProducts: productsReducer,
  getBags: bagsReducer,
  getJewelry: jewelryReducer,
  getShoes: shoesReducer,
  // productsFiltered: productsFilteredReducer,
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
