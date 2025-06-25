import React from "react";
import useFetchData from "../hooks/useFetchData";

const DisplayData = () => {
  const data = useFetchData("https://fakestoreapi.com/products");
  console.log(data, "My Data");
  return (
    <>
      <div>DisplayData</div>
    </>
  );
};

export default DisplayData;
