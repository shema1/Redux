// import './index.scss'
import store from './store'
import { addUser } from './users.actions'

const obj = {
  id:76,
  name:'Sarah'
}

store.dispatch(addUser(obj))



store.subscribe(()=>{
  console.log(store.getState())
})

console.log(store.getState())