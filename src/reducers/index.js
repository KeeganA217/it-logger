import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReduer from "./techReducer";

export default combineReducers({
  log: logReducer,
  tech: techReduer,
});
