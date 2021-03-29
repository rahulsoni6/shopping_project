import { PRODUCT_RENDER, PRODUCT_SUCCESS } from "../constants/actionTypes";

export const productRenderReq = () => {
  return {
    type: PRODUCT_RENDER,
  };
};

export const productRenderSucc = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload,
  };
};
