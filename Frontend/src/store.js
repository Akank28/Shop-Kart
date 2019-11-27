import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
            /* logger must be the last middleware in chain to log actions */
            applyMiddleware(thunk)  
        )
);
export default store;