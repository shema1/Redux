import React, { Component } from "react";
import { connect, useStore } from "react-redux";
import * as usersActions from "./user.actions";
import { getUserData } from "./user.geteway";
class SearchField extends Component {
  state = {
    userName: ""
  };
  onChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };
  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData
};

export default connect(null, mapDispatch)(SearchField);
