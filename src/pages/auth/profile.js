import React, { Component } from "react";
import { connect } from "react-redux";
import { redirect } from "react-router-dom";

export class Profile extends Component {
  render() {
    const { title, user } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        {user && (
          <>
            <img src={user.picture} alt="avatar" className="avatar" />
            <ul>
              <li>Full name : {user.name + " " + user.firstName}</li>
              <li>username : {user.username}</li>
            </ul>
          </>
        )}
      </div>
    );
  }
}

export const profileLoader = () => {
  const connected = Boolean(sessionStorage.getItem("Authorization"));
  return !connected ? redirect("/login") : null;
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Profile);
