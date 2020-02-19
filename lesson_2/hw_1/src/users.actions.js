export const ADD_USER = "ADD_USER"
export const DEL_USER = "DEL_USER"


export const addUser = () => {
    return {
        type: ADD_USER,
    }
}

export const delUser = () => {
    return {
        type: DEL_USER
    }
}