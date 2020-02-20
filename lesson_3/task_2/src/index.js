import store from './store'
import{increment, decrement, reset} from './counter.actions'


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

console.log(store.getState())