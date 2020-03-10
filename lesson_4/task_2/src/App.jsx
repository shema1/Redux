import React from 'react';
import { Provider } from 'react-redux';
// import Counter from './Counter';
import Users from './Users/Users'
import store from './store';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Users/>
    </Provider>
  );
}

export default App;