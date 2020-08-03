// Redux
import { createSelector } from "reselect";

// Reducers
const sessionReducer = ({ session }) => session;

export const loginSelector = createSelector([sessionReducer], session => session.login);
