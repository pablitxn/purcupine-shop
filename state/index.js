// Redux
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
// Redux Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "state/rootSaga";
// Reducers
import reducers from "state/rootReducer";

// Definitions
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleWare = createLogger({
	collapsed: true,
});
let store;
let middlewares = [];

// Store
const makeStore = (initialState = {}) => {
	if (process.env.NODE_ENV === "development") middlewares.push(loggerMiddleWare);
	middlewares.push(sagaMiddleware);

	store = createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);
	sagaMiddleware.run(rootSaga);

	return store;
};

export { store };

export default makeStore;
