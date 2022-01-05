import { ActionTypes } from "../constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(
      "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
    );
    dispatch({ type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_PRODUCTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBags = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_BAGS_REQUEST });

  try {
    const { data } = await axios.get(
      "https://mocki.io/v1/5b84614a-f98a-477c-8b21-4a5fc0dcc65e"
    );
    dispatch({ type: ActionTypes.GET_BAGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_BAGS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getShoes = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_SHOES_REQUEST });

  try {
    const { data } = await axios.get(
      "https://mocki.io/v1/9acd7edd-917e-4734-971d-b003ab402bce"
    );
    dispatch({ type: ActionTypes.GET_SHOES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_SHOES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getJewelry = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_JEWELRY_REQUEST });

  try {
    const { data } = await axios.get(
      "https://mocki.io/v1/ebbddde2-1bff-44f7-ac46-4490f49b8161"
    );
    dispatch({ type: ActionTypes.GET_JEWELRY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_JEWELRY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const setFiltered = (productsFiltered) => ({
//   type: ActionTypes.SET_PRODUCTS_FILTERED,
//   payload: productsFiltered,
// });
