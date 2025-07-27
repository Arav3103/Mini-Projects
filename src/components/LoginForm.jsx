import React, { useContext, useState } from "react";
import LoginContext from "../context/LoginContext";

const LoginForm = () => {
  const { login, handleLogin } = useContext(LoginContext);
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(userName, pwd);
    setUserName("");
    setPwd("");
  };

  const handleChange = (e) => {
    if (e.target.id === "username") setUserName(e.target.value);
    else if (e.target.id === "password") setPwd(e.target.value);
  };

  console.log("login", login);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          {"Username : "}
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={handleChange}
            id="username"
          />
        </label>
        <label>
          {"Password : "}
          <input
            type="text"
            placeholder="Enter your password"
            value={pwd}
            onChange={handleChange}
            id="password"
          />
        </label>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
