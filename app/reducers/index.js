
import { combineReducers } from "redux";
import UserListReducer from "./userlist-reducer";
import ActiveUserReducer from "./active-user-reducer";

const allReducers = combineReducers({
    users: UserListReducer,
    activeUser: ActiveUserReducer
})

export default allReducers;