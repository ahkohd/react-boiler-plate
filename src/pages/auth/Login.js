import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login here</h2>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/some-unknown-url">Error 404 page</Link>
      </p>
    </div>
  );
};

export default Login;
