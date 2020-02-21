import { ADD_USER, REMOVE_USER } from "./user.actions"



const usersReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_USER:
            return  action.payload.userData
        case REMOVE_USER:
            return  null

        default:
            return state
    }
}

export default usersReducer
