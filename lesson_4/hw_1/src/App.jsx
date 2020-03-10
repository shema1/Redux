import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./index.scss";
import UserList from "./Users/UserList";

function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

export default App;
