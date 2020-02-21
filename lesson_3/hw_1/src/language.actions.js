
export const SELECT_LANGUAGE = "SELECT_LANGUAGE"



export const setLanguage=(lang)=>{
    return {
        type: SELECT_LANGUAGE,
        payload:{
            lang
        }
    }
}
