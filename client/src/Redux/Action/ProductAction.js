import { actionTypes } from "../Types";

export const getAllProduct = (product) => ({
  type: actionTypes.GET_ALL_PRODUCTS,
  payload: product
});
