import {combineReducers, createStore} from "redux";
import allOrdersReducer from "./reducers/allOrdersReducer";
import usersReducer from "./reducers/usersReducer";
import popupStatus from "./reducers/popupStatus";

const reducers = combineReducers({
    allOrders:allOrdersReducer,
    users:usersReducer,
    popupStatus:popupStatus
})
const store = createStore(reducers)

export default store