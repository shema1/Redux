import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from 'redux-thunk'
import userReducer from './users/user.reducer'




const reducer = combineReducers({
    users: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)));

export default store;