import React from "react";

const Stack = ({ path, name }) => {
  return (
    <div style={{ display: "inline-block", marginLeft: "20px" }}>
      <img src={path} />
      <div>{name}</div>
    </div>
  );
};

export default Stack;
