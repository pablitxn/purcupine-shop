import { createSelector } from "reselect";

// Reducers
const routerReducer = ({ router }) => router;

export const routerSelector = createSelector([routerReducer], router => router);
