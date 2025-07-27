import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";

const UserType = () => {
  const { type } = useContext(LoginContext);
  console.log("Usertype rerendered");

  return <div>UserType is {type}</div>;
};

export default UserType;
