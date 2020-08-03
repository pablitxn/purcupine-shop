import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import Session from "state/session/reducer";
import Shop from "state/shop/reducer";


const createRootReducer = (history) =>
  combineReducers({
    Session,
    Shop,
    router: connectRouter(history),
  });

export default createRootReducer;
