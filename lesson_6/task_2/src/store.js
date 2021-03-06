import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from 'redux-thunk'
import userReducer from './users/user.reducer'

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};


const reducer = combineReducers({
    users: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger)));

export default store;