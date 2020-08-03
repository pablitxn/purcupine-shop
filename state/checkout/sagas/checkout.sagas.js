// // Redux Ducks
// import * as actions from "state/checkout/actions";
// import * as types from "state/checkout/types";
// import * as services from "state/checkout/services";
// // Redux Saga
// import { put, takeLatest, call } from "redux-saga/effects";

// function* workerCheckout({ payload }) {
//   // try {
//   console.log("build checkout -> ", payload)
//   // const { response, data } = yield call(services.getSections, token);
//   // switch (response.status) {
//   //   case 200:
//   //     yield put(actions.successCheckout(data));
//   //     break;
//   //   default:
//   //     yield put(actions.failureCheckout());
//   //     break;
// }
// // } catch (error) {
// // yield put(actions.failureCheckout(error));
// // // }
// // }

// function* watchCheckout() {
//   yield takeLatest(types.CHECKOUT_REQUEST, workerCheckout);
// }

// export default [watchCheckout];
