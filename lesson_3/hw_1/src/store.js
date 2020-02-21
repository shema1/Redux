import { createStore, combineReducers } from "redux"
import usersReducer from "./user.reducer"
import cardReducer from "./cart.reducer"
import languageReducer from "./language.reducer"


const appReducer = combineReducers({
    user: usersReducer,
    cart: cardReducer,
    language: languageReducer
})

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store