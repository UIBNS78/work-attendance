import React, { Component } from "react";

export class Login extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <h3>{title}</h3>
      </>
    );
  }
}

export default Login;
