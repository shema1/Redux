import {userReducer} from "./user.reducer"
import { createStore } from "redux"
const store = createStore(userReducer)

export default store