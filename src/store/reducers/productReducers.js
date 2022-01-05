import { ActionTypes } from "../constants/productConstants";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case ActionTypes.GET_PRODUCTS_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const bagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_BAGS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ActionTypes.GET_BAGS_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case ActionTypes.GET_BAGS_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const jewelryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GetJewelry_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ActionTypes.GET_JEWELRY_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case ActionTypes.GET_JEWELRY_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const shoesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SHOES_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ActionTypes.GET_SHOES_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case ActionTypes.GET_SHOES_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

// export const productsFilteredReducer = (
//   state = initialState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS_FILTERED:
//       return {
//         ...state,
//         products: payload,
//       };
//     default:
//       return state;
//   }
// };
