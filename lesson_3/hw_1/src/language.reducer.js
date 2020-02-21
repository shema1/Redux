import { EN, ES, UA } from "./language.actions"



const languageReducer = (state = "EN", action) => {
    switch (action.type) {
        case EN:
            return {
                language: 'EN'
            }
        case ES:
            return {
                language: 'ES'
            }
        case UA:
            return {
                language: 'UA'
            }
        default:
            return state
    }
}

export default languageReducer