import { createStore, combineReducers } from "redux"
import usersReducer from "./users.reducer"
import cardReducer from "./card.reducer"
import languageReducer from "./language.reducer"


const appReducer = combineReducers({
    user: usersReducer,
    cards: cardReducer,
    language: languageReducer
})
const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store