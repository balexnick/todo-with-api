import React, { Component } from "react";
import { Redirect } from "react-router";

class Logout extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("token");
  }
  render() {
    return <Redirect to="/" />;
  }
}
export default Logout;
