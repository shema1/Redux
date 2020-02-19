import { createStore } from "redux"
import{ADD_USER,DEL_USER} from "./users.actions"



export const userReducer = (state ={}, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state
            }
        case DEL_USER:
            return {
                ...state
            }

        default:
            return state
    }
}

