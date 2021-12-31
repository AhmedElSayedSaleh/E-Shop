import { combineReducers } from "redux";
import {
  productsReducer,
  bagsReducer,
  jewelryReducer,
  shoesReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  bags: bagsReducer,
  jewelry: jewelryReducer,
  shoes: shoesReducer,
});

export default reducers;
