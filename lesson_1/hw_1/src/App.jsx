import React, { Component } from "react";
import Header from "./Header";
import { user, UserContext } from "./user";

class App extends Component {
  state = {...user};
  render() {
    // console.log(this.state)
    return (
      <div className="page">
        <UserContext.Provider value={this.state}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
