// Redux Saga
import { fork, all } from "redux-saga/effects";
// Sagas
import { sagas as sessionSagas } from "state/session/sagas";
import { sagas as shopSagas } from "state/shop/sagas";

const allSagas = [
  ...sessionSagas,
  ...shopSagas
];

function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}

export default rootSaga;