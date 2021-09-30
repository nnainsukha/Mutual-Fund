import React from "react";
import Main from "./routes/Main";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  loggedInUserId: null,
  lastUsedId: 1,
  users: [
    {
      id: 1,
      name: "Neha Nainsukha",
      email: "neha.trial@test.com",
      password: "a",
    },
  ],
};
const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN_USER") {
    const newObj = {
      ...state,
      loggedInUserId: action.id,
    };
    return newObj;
  } else if (action.type === "CREATE_USER") {
    const newId = state.lastUsedId + 1;
    const newUser = action.user;
    newUser.id = newId;
    const newObj = {
      ...state,
      lastUsedId: newId,
      users: [...state.users, newUser],
    };
    return newObj;
  } else if (action.type === "LOGOUT_USER") {
    const newObj = {
      ...state,
      loggedInUserId: null,
    };
    return newObj;
  }
  return state;
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
