// Redux
import { combineReducers } from "redux";
// Reducers
import auth from "state/auth/reducer";
import shop from "state/shop/reducer";

const reducers = combineReducers({
	auth,
	shop,
});

export default reducers;
