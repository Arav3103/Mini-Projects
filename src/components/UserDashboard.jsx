import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";

const UserDashboard = () => {
  const { login, handleLogout } = useContext(LoginContext);
  const handlelogout = () => handleLogout();
  return (
    <>
      {login.isLoggedIn && (
        <>
          <p>Username is {login.username}</p>
          <p>Password is {login.password}</p>
          <p>Login Status is {login.isLoggedIn ? "Logged User" : "N/A"}</p>
          <button onClick={handlelogout}>Logout</button>
        </>
      )}
    </>
  );
};

export default UserDashboard;
