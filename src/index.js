import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./TrafficLight";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RED, AMBER, GREEN, UPDATE_TRAFFIC_SIGNAL } from "./action-types";

const initialState = {
  currentStatus: RED,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TRAFFIC_SIGNAL:
      if (state.currentStatus === RED) {
        return { currentStatus: AMBER };
      } else if (state.currentStatus === AMBER) {
        return { currentStatus: GREEN };
      } else if (state.currentStatus === GREEN) {
        return { currentStatus: RED };
      }
      break;
    default:
      return state;
  }
}
const store = createStore(reducer);
console.log("store created", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <TrafficLight />
  </Provider>,
  document.getElementById("root")
);
