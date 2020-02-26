import { combineReducers } from "redux";
import attendReducer from "./attendReducer";

export default combineReducers({
  attend: attendReducer
});
