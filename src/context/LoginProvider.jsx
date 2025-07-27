import React, { useMemo, useState } from "react";
import LoginContext from "./LoginContext";

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
  });

  const [type, setType] = useState("");

  const handleLogin = (uname, pwd) => {
    setLogin((prevStatus) => {
      console.log("Inside handle Login", prevStatus);
      return {
        ...prevStatus,
        username: uname,
        password: pwd,
        isLoggedIn: true,
      };
    });
    if (type !== "Premium") {
      setType("Premium");
    }
  };

  const handleLogout = () =>
    setLogin((prevStatus) => {
      console.log("Inside handle Logout", prevStatus);
      return {
        ...prevStatus,
        username: "",
        password: "",
        isLoggedIn: false,
      };
    });

  const ContextObject = {
    login,
    handleLogin,
    handleLogout,
    type,
  };

  const memoContextObject = useMemo(() => {
    return {
      login,
      handleLogin,
      handleLogout,
      type,
    };
  }, [login, type]);
  return (
    <LoginContext.Provider value={memoContextObject}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
