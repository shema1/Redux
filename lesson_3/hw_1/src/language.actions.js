
export const SELECT_LANGUAGE = "SELECT_LANGUAGE"



export const changeLanguage=(lang)=>{
    return {
        type: SELECT_LANGUAGE,
        payload:{
            lang
        }
    }
}
