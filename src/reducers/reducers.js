/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from "../constants/actionTypes";

export const INITIAL_STATE = {
  productrender: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.PRODUCT_RENDER:
    //   return {
    //     ...state,
    //   };
    case actionTypes.PRODUCT_SUCCESS:
      return {
        ...state,
        productrender: action.payload,
      };
    default:
      return state;
  }
};
