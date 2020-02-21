import store from './store'
import { setLanguage } from './language.actions'
import { setProduct, deleteProduct } from './cart.actions'
import { setUser, removeUser } from './user.actions'

store.dispatch(setLanguage("ua"))
store.dispatch(setProduct({ id: 76, name: "milk" }))
store.dispatch(setProduct({ id: 56, name: "meat" }))
store.dispatch(deleteProduct(76))
store.dispatch(setUser({ id: 10, name: "bob" }))
store.dispatch(removeUser())
console.log(store.getState())