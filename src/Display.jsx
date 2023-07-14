import React from "react";
import "./Display.css";

const Display = (props) => {
  const testFunc = () => {
    props.onCheck();
  };
  return (
    <div className="container">
      <h1>Hello</h1>
      <button onClick={testFunc}>OK</button>
    </div>
  );
};
export default Display;
