import { actionTypes } from "../Types";
const initialState = {
  gallery: "",
  name: "",
  id: "",
  category: "",
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return { ...state, ...payload };

    default: {
      return state;
    }
  }
};

export default productReducer;
