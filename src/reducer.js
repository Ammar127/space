import { combineReducers } from "redux";
import data from "./reducers/data";


export default combineReducers({
  space: data,
});
