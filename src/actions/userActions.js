import dispatcher from "../appDispatcher";
import * as userApi from "../api/userApi";
import actionTypes from "./actionTypes";

export function getUsers() {
  return userApi.get().then((users) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_USERS,
      users,
    });
  });
}
