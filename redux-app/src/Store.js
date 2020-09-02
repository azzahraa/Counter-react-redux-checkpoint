import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import ActionTypes from "./actions";
const myMiddleWare = (store) => (next) => (action) => {
  // console.log(store.getState().counterReducer.count)
  console.log(action);
  if ((action.type === ActionTypes.DECREASE_COUNT)) {
    if ((store.getState().counterReducer.count === 0)) {
      alert("SORRY no negative numbers allowed");
    } else {
      next(action);
    }
  }else {
      next(action)
  }
};
export default createStore(
  rootReducer,
  compose(
    applyMiddleware(myMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
