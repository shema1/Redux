import store from './store'
import { changeOnUa } from './language.actions'
import { addProduct, deleteProduct } from './cart.actions'
import { addUser, removeUser } from './user.actions'

store.dispatch(changeOnUa())
store.dispatch(addProduct({ id: 76, name: "milk" }))
store.dispatch(addProduct({ id: 56, name: "meat" }))
store.dispatch(deleteProduct(76))
store.dispatch(addUser({ id: 10, name: "bob" }))
store.dispatch(removeUser())
console.log(store.getState())