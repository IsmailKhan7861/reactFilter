import "./index.css";
import { useState } from "react";
import Display from "./Display";
import Array from "./Array";

const arrayItems = ["apple", "orange", "banana", "mango", "pinapple"];

export default function App() {
  const [currState, setState] = useState(true);

  const funcTest = () => {
    setState(false);
  };
  const getData = () => {
    setState((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="App">
      {currState && <Display onCheck={funcTest} />}
      {!currState && <button onClick={getData}>GETBOX</button>}
      <Array items={arrayItems} />
    </div>
  );
}
