import { combineReducers } from "redux";

import userReducer from './userReducer'
import articeReducer from "./articleReducer";

const rootReducer = combineReducers({
  user: userReducer,
  article: articeReducer
})

export default rootReducer;