import{ADD_USER,DEL_USER} from "./users.actions"



const userReducer = (state ={usersList:[]} , action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                usersList: state.usersList.concat(action.user)
            }
        case DEL_USER:
            return {
                usersList: state.usersList.filter(user => user.id !== action.id)
            }

        default:
            return state
    }
}

export default userReducer
