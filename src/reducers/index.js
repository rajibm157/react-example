import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    //preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk // ... other middlewares ...
      )
    )
  );

  return store;
}
