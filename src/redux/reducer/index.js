import { combineReducers } from "redux";
import addTaskReducer from "./addTaskReducer";
import deleteTaskReducer from "./deleteTaskReducer";

const rootReducers = combineReducers({
  addTaskReducer,
  deleteTaskReducer,
});

export default rootReducers;
