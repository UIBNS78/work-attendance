import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h3>Page not found</h3>
      <Link to="/login">
        <button>GO TO LOGIN PAGE</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
