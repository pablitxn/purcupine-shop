// Redux Ducks
import sessionDuck from "state/session";

export const LOGIN_REQUEST = sessionDuck.defineType("LOGIN_REQUEST");
export const LOGIN_SUCCESS = sessionDuck.defineType("LOGIN_SUCCESS");
export const LOGIN_FAILURE = sessionDuck.defineType("LOGIN_FAILURE");
