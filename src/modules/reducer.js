import ACTIONS from "./action";
import { combineReducers } from "redux";

import _ from "lodash";
const defaultState = {};
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      let details = action.payload;
      console.log("details" + JSON.stringify(details));
      let newItem = { username: details.name, password: details.pwd };
      let newState = _.cloneDeep(state);
      newState = newItem;
      return newState;
    }
    default:
      return state;
  }
};
const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM_USER: {
      let userdetails = action.payload;
      console.log("userdetails" + JSON.stringify(userdetails));
      let newState = _.cloneDeep(state);
      let newItem = userdetails;
      newState = newItem;
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  login: todoReducer,
  users: loginReducer
});
