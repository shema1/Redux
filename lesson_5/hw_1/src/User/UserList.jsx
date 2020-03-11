import React from "react";
import User from "./User";
import { connect } from "react-redux";
import { usersListSelections, filterTextSelections, filterUsersSelections } from "./user.selectors";
import Filter from "../Filter";
import * as userActions from "./user.actions";

const UserList = ({ users, filterText, onChange }) => {
  return (
    <div>
      <Filter filterText={filterText} onChange={newFilterText} count={users.length} />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: filterUsersSelections(state),
    filterText: filterTextSelections(state)
  };
};

const mapDispatch = {
  newFilterText: userActions.filterText
};

export default connect(mapState, mapDispatch)(UserList);
