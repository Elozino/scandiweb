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

export const moneySymbol = (value) => ({
  type: actionTypes.MONEY_SYMBOL,
  payload: value,
});

export const selectedItem = (value) => ({
  type: actionTypes.SELECTED,
  payload: value,
});
