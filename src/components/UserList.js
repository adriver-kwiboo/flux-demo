import React, { useEffect, useState } from "react";
import userStore from "../stores/userStore";
import { getUsers } from "../actions/userActions";

function UserList(props) {
  const [users, setUsers] = useState(userStore.getUsers());

  const onChange = () => {
    setUsers(userStore.getUsers());
  };

  useEffect(() => {
    userStore.addChangeListener(onChange);
    if (!users) {
      getUsers();
    }
    return () => {
      userStore.removeChangeListener(onChange);
    };
  }, [users]);

  return users ? (
    <table>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.name}>
              <td>{user.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <span>Loading...</span>
  );
}

export default UserList;
