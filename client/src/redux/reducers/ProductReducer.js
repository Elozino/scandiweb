import { actionTypes } from "../types";

const initialState = {
  cart: [],
  products: [],
  singleItem: [],
  money: [],
  selectedItem: [],
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: payload,
      };
    case actionTypes.SINGLE_ITEM:
      return {
        ...state,
        singleItem: payload,
      };
    case actionTypes.MONEY_SYMBOL:
      return {
        ...state,
        money: payload,
      };
    case actionTypes.SELECTED:
      return {
        ...state,
        selectedItem: payload
      };
    default: {
      return state;
    }
  }
};

export default ProductReducer;

//payload is the response of the type of the action you want to perform
//type is the name action
