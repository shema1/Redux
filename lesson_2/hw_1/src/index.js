// import './index.scss'
import store from './store'
import { addUser,deleteUser } from './users.actions'



store.dispatch(addUser({
  id: 76,
  name: 'Sarah'
}))
store.dispatch(addUser({
  id:32,
  name:'test1'
}))
store.dispatch(addUser({
  id:11,
  name:'test2'
}))
store.dispatch(deleteUser(11))



// store.subscribe(()=>{
console.log(store.getState())
// })
