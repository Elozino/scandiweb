import { actionTypes } from "../types";

export const getAllProducts = (value) => ({
  type: actionTypes.GET_ALL_PRODUCTS,
  payload: value,
});

export const addToCart = (value) => ({
  type: actionTypes.ADD_TO_CART,
  payload: value,
});

export const singleItem = (value) => ({
  type: actionTypes.SINGLE_ITEM,
  payload: value,
});

// export const getAllProducts = async (products) => (dispatch) => ({
//   await fetch("https://onGod"){}
// });
