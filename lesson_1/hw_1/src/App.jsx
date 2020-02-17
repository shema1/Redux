import React, { Component } from "react";
import Header from "./Header";
import { user, UserContext } from "./user";

class App extends Component {
  state = { 
    userData: { ...user } 
  };
  render() {
    // console.log(this.state)
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
