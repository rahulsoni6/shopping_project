import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootsaga from "../rootsaga/rootsaga";
import { reducer } from "../reducers/reducers";
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, reduxDevTools(middleware));
sagaMiddleware.run(rootsaga);
