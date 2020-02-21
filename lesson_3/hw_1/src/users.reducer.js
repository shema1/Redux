import { ADD_USER, REMOVE_USER } from "./users.actions"



const usersReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: action.payload.userData
            }
        case REMOVE_USER:
            return {
                user: null
            }
        default:
            return state
    }
}

export default usersReducer
