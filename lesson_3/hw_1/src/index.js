import store from './store'
import { setLanguage } from './language.actions'
import { addProduct, removeProduct } from './cart.actions'
import { setUser, removeUser } from './user.actions'

store.dispatch(setLanguage("ua"))
store.dispatch(addProduct({ id: 76, name: "milk" }))
store.dispatch(addProduct({ id: 56, name: "meat" }))
store.dispatch(removeProductt(76))
store.dispatch(setUser({ id: 10, name: "bob" }))
store.dispatch(removeUser())
console.log(store.getState())