// Redux Ducks
import * as actions from "state/shop/actions";
import * as types from "state/shop/types";
import * as services from "state/shop/services";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";

function* workerSections() {
  // try {
  //   const { response, data } = yield call(services.getSections, token);
  //   switch (response.status) {
  //     case 200:
  //       yield put(actions.successSections(data));
  //       break;
  //     default:
  //       yield put(actions.failureSections());
  //       break;
  //   }
  // } catch (error) {
  //   yield put(actions.failureSections(error));
  // }
}

function* watchSections() {
  yield takeLatest(types.SECTIONS_REQUEST, workerSections);
}

export default [watchSections];
