import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import Userinfo from './users/Userinfo';
import SerchField from './users/SerchField';

function App() {
  return (
    <Provider store={store}>
      <div className="page">
        <Userinfo />
        <SerchField />
      </div>
    </Provider>
  );
}

export default App;