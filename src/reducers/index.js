import eventReducer from "./events";
import { combineReducers } from "redux";
import { useReducer } from "react";

const rootReducer = combineReducers({
  event: eventReducer,
});

export default rootReducer;
