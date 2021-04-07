import React from "react";
import { connect } from "react-redux";
import { changeTrafficLight } from "./actions";

const TrafficLight = (props) => {
  return (
    <div>
      <h2>Current traffic light status</h2>
      <p>{props.currentStatus}</p>
      <button onClick={props.changeTrafficLight}>CHANGE TRAFFIC LIGHT</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentStatus: state.currentStatus,
  };
};

const mapDispatchToProps = {
  changeTrafficLight: changeTrafficLight,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficLight);
