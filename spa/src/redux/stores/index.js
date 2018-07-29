import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxReset from "redux-reset";
import createSagaMiddleware from "redux-saga";

import mainReducer from "../reducers";
import rootSaga from "../sagas";

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

middleware.push(thunkMiddleware);
if (process.env.NODE_ENV !== "production") {
  const logger = createLogger();
  middleware.push(logger);
}

const createAppStore = compose(applyMiddleware(...middleware), reduxReset())(
  createStore
);

const store = createAppStore(mainReducer);

sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}
