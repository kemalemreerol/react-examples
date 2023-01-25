import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllBurgersReducer } from "./reducers/burgerReducer";

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
});

const initialState = {};

const composeEnchancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnchancers(applyMiddleware(thunk))
);

export default store;
