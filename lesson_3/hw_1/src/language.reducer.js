import { SELECT_LANGUAGE } from "./language.actions"



const languageReducer = (state = "en", action) => {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return{
                language: action.payload.lang
            }
        default:
            return state
    }
}

export default languageReducer