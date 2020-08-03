// Redux Ducks
import * as actions from "state/shop/actions";
import * as types from "state/shop/types";
import * as services from "state/shop/services";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";

function* workerProducts() {
  // try {
  //   const { response, data } = yield call(services.getProducts, token);
  //   switch (response.status) {
  //     case 200:
  //       yield put(actions.successProducts(data));
  //       break;
  //     default:
  //       yield put(actions.failureProducts());
  //       break;
  //   }
  // } catch (error) {
  //   yield put(actions.failureProducts(error));
  // }
}

function* watchProducts() {
  yield takeLatest(types.PRODUCTS_REQUEST, workerProducts);
}

export default [watchProducts];