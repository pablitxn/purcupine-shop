// Saga Effects
import { fork, all } from "redux-saga/effects";
// Sagas
import { sagas as authSagas } from "state/auth/sagas";
import { sagas as shopSagas } from "state/shop/sagas";

const allSagas = [...authSagas, ...shopSagas];

function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}

export default rootSaga;
