import React, { Component } from "react";
import Pagination from "./Pagination";
import User from "./User";
import { connect } from "react-redux";
import * as UserActions from "./users.actions";
class UserList extends Component {
  state = {
    itemsPerPage: 3
  };
  render() {
    const { users, goPrev, goNext, currentPage } = this.props;
    const { itemsPerPage } = this.state;
    const newList = users.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
    return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {newList.map(user => (
            <User key={Math.random()} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage
  };
};

const mapDispatch = {
    goPrev: UserActions.goPrev,
    goNext: UserActions.goNext
};

export default connect(mapState, mapDispatch)(UserList);
