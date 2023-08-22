// sare reducer ko ek sath export krne k liye .
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount:amountReducer
});

export default reducers