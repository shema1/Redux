import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;