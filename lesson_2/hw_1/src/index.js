// import './index.scss'
import store from './store'
import { addUser,delUser } from './users.actions'

const obj = {
  id: 76,
  name: 'Sarah'
}

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
store.dispatch(delUser(11))



// store.subscribe(()=>{
console.log(store.getState())
// })
