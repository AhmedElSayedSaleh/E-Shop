import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const setBags = (bags) => ({
  type: ActionTypes.SET_BAGS,
  payload: bags,
});

export const setJewelry = (jewelry) => ({
  type: ActionTypes.SET_JEWELRY,
  payload: jewelry,
});

export const setShoes = (shoes) => ({
  type: ActionTypes.SET_SHOES,
  payload: shoes,
});

// export const selectedProduct = (product) => ({
//   type: ActionTypes.SELECTED_PRODUCT,
//   payload: product,
// });
