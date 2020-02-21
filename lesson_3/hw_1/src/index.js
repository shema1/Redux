import store from './store'
import { changeLanguage } from './language.actions'
import { addProduct, deleteProduct } from './cart.actions'
import { setUser, removeUser } from './user.actions'

store.dispatch(changeLanguage("ua"))
store.dispatch(addProduct({ id: 76, name: "milk" }))
store.dispatch(addProduct({ id: 56, name: "meat" }))
store.dispatch(deleteProduct(76))
store.dispatch(setUser({ id: 10, name: "bob" }))
store.dispatch(removeUser())
console.log(store.getState())