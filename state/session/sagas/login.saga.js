// Redux Ducks
import * as actions from "state/session/actions";
import * as types from "state/session/types";
import * as services from "state/session/services";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Router
import { push } from "connected-react-router";

function* workerLogin({ payload }) {
  // try {
  //   const { username, password } = payload;

  //   const body = {
  //     username: username,
  //     password: password,
  //   };

  //   const { response, data } = yield call(services.login, body);
  //   switch (response.status) {
  //     case 200:
  //       localStorage.setItem("access_token", data.access_token);
  //       yield put(actions.successLogin(data));
  //       yield put(push("/home"));
  //       break;
  //     default:
  //       yield put(actions.failureLogin());
  //       break;
  //   }
  // } catch (error) {
  //   yield put(actions.failureLogin(error));
  // }
}

function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}

export default [watchLogin];
