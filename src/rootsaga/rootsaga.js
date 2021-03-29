import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/actions";
// import * as actions from "../actionsSaga/actionsSaga";
import * as actionTypes from "../constants/actionTypes";

export function* productrender(action) {
  try {
    const response = yield axios
      .get("http://localhost:8000/api/products")
      .then(async (response) => response)
      .catch(async (error) => error);

    if (response.status === 200) {
      yield put(actions.productRenderSucc(response.data));
      console.log("successfully loaded....", response.data);
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootsaga() {
  yield takeEvery(actionTypes.PRODUCT_RENDER, productrender);
}
