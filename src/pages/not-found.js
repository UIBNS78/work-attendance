import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function PageNotFound() {
  const connected = useLoaderData();
  return (
    <div>
      <h3>Page not found</h3>
      <Link to={connected ? "/chat" : "/login"}>
        <button>GO TO {connected ? "CHAT" : "LOGIN"} PAGE</button>
      </Link>
    </div>
  );
}

export const pageNotFoundLoader = () => {
  const connected = Boolean(sessionStorage.getItem("Authorization"));
  return connected;
};

export default PageNotFound;
