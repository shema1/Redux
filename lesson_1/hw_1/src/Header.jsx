import React, { Component } from "react";
import UserMenu from "./UserMenu";
import { UserContext } from "./user";

class Header extends Component {
  render() {
    // console.log(this.context)
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}
Header.contextType = UserContext;
export default Header;
