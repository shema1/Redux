const userReducer = (state ={users:[]} , action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: state.users.concat(action.user)
            }
        case DEL_USER:
            return {
                users: state.users.filter(user => user.id !== action.id)
            }

        default:
            return state
    }
}

export default userReducer