
export const SELECT_LANGUAGE = "SELECT_LANGUAGE"



 const changeLanguage=(lang)=>{
    return {
        type: SELECT_LANGUAGE,
        payload:{
            lang
        }
    }
}

export default changeLanguage
