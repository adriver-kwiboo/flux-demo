import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _users = null;
class UserStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getUsers() {
    return _users;
  }
}

const store = new UserStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.UPDATE_USER:
      _users = _users.map((x) => (x.id === action.user.id ? action.user : x));
      store.emitChange();
      break;
    case actionTypes.LOAD_USERS:
      _users = action.users;
      store.emitChange();
      break;
    default:
  }
});

export default store;
