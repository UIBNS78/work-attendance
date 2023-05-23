import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div className="app">
        <ul>
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SIGNUP</NavLink>
          </li>
          <li>
            <NavLink to="/chat">CHAT</NavLink>
          </li>
        </ul>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default NavBar;
