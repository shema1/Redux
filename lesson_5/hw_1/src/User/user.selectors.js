import { createSelector } from "reselect"



export const usersListSelections = (state) =>{
    return state.users.usersList
}

export const filterTextSelections = (state )=>{
    return state.users.filterText
}


export const filterUsersSelections = createSelector(
    [usersListSelections,filterTextSelections], (usersList,filterText  )=>{
        return usersList.filter(user =>user.name.includes(filterText))
    }
)