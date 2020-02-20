import store from './store'

import{increment, decrement, reset} from './counter.actions'
import{addUser,deleteUser,updateUser}from './users.actions'

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(addUser({id:10,name: "Jhon"}))
store.dispatch(addUser({id:12,name: "Nik"}))
store.dispatch(deleteUser(10))
store.dispatch(updateUser(12,{name:"Bob", shurename:"Kiv"}))
console.log(store.getState())