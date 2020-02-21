export const EN = "EN"
export const ES = "ES"
export const UA = "UA"
export const SELECT_LANGUAGE = "SELECT_LANGUAGE"



export const changeLanguage=()=>{
    return {
        type: SELECT_LANGUAGE
    }
}

export const changeOnEn=()=>{
    return{
        type:EN
    }
}

export const changeOnEs=()=>{
    return{
        type:ES
    }
}

export const changeOnUa=()=>{
    return{
        type:UA
    }
}