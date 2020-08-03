// Redux
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger";
// Redux Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "state/rootSaga";
// Reducers
import createRootReducer from "state/rootReducer";
// Router
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

// Definitions
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleWare = createLogger({
  collapsed: true,
});
let store;
let middlewares = [];

const makeStore = (initialState = {}) => {
  if (process.env.NODE_ENV === "development") middlewares.push(loggerMiddleWare);
  middlewares.push(routerMiddleware(history));
  middlewares.push(sagaMiddleware);

  store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

export { store, history };

export default makeStore;