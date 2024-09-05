import React from "react";
import useAuth from "../../hooks/authHook";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth?.login(
      {
        username: "admin",
        password: "admin",
      },
      () => {
        navigate("/");
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
