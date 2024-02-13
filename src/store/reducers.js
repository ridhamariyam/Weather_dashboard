import { combineReducers } from "redux";
import AuthReducer from './slice'

const rootReducer = combineReducers({
    AuthReducer,
})

export default rootReducer;