export const ADD_USER = "ADD_USER"
export const DEL_USER = "DEL_USER"


export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const delUser = (id) => {
    return {
        type: DEL_USER,
        id
    }
}