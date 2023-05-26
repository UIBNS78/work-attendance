import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { initUser, logout } from "../redux/reducers/user.reducer";

export const NavBar = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = sessionStorage.getItem("Authorization");
    if (user && token) {
      dispatch(initUser({ user, token }));
    }
  });

  const handleLogout = () => {
    if (window.confirm("You are about to log out, continue ?")) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <div className="app">
      <ul>
        {user ? (
          <>
            <li>
              <NavLink to="/chat">CHAT</NavLink>
            </li>
            <li>
              <NavLink to="/profile">MY PROFILE</NavLink>
            </li>
            <li>
              <button onClick={() => handleLogout()}>LOG OUT</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">LOGIN</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SIGNUP</NavLink>
            </li>
          </>
        )}
      </ul>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
