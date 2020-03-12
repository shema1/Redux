import { SHOW_SPINNER, USER_DATA_RECIVED } from './user.actions'


const initialData = {
    isFetching: false,
    userData: null
}

const userReducer = (state = initialData, actions) => {

    switch (actions.type) {
        case SHOW_SPINNER: {
            return {
                ...state,
                isFetching: true
            }
        }
        case USER_DATA_RECIVED: {
            return {
                ...state,
                userData: actions.payload.userData,
                isFetching: false
            }
        }
        default:
            return state
    }
}

export default userReducer