// Redux Ducks
import sessionDuck from "state/session";
import * as types from "state/session/types";

export const requestLogin = sessionDuck.createAction(types.LOGIN_REQUEST);
export const successLogin = sessionDuck.createAction(types.LOGIN_SUCCESS);
export const failureLogin = sessionDuck.createAction(types.LOGIN_FAILURE);
