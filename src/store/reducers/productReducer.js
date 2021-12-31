import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      brand: String,
      brandUrl: String,
      category: String,
      codCountry: String,
      currency: String,
      currentPrice: Number,
      discount: Number,
      productId: Number,
      primaryImage: String,
      isNew: Boolean,
      likesCount: Number,
      model: String,
      name: String,
      rawPrice: Number,
      subcategory: String,
      url: String,
      variationColor1: String,
      variationImage1: String,
      variationThumbnail1: String,
      variationColor2: String,
      variationImage2: String,
      variationThumbnail2: String,
    },
  ],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    // case ActionTypes.SELECTED_PRODUCT:
    //   return {
    //     ...state,
    //     selectedProduct: payload,
    //   };
    default:
      return state;
  }
};

export const bagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BAGS:
      return {
        ...state,
        products: payload,
      };
    // case ActionTypes.SELECTED_PRODUCT:
    //   return {
    //     ...state,
    //     selectedProduct: payload,
    //   };
    default:
      return state;
  }
};

export const jewelryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_JEWELRY:
      return {
        ...state,
        products: payload,
      };
    // case ActionTypes.SELECTED_PRODUCT:
    //   return {
    //     ...state,
    //     selectedProduct: payload,
    //   };
    default:
      return state;
  }
};

export const shoesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SHOES:
      return {
        ...state,
        products: payload,
      };
    // case ActionTypes.SELECTED_PRODUCT:
    //   return {
    //     ...state,
    //     selectedProduct: payload,
    //   };
    default:
      return state;
  }
};
