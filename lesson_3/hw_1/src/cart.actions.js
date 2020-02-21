export const ADD_PRODUCT = 'CARD/ADD_PRODUCT'
export const DELETE_PRODUCT = 'CARD/DELETE_PRODUCT'


export const addProduct = (product)=>{
    return{
        type:ADD_PRODUCT,
        payload:{
            product
        }
    }
}


export const removeProduct = (productId) =>{
    return{
        type: DELETE_PRODUCT,
        payload:{
            productId
        }
    }
}