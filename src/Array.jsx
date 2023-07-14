import React  from "react";
import {useState} from "react";

const Array = (props) =>{
  const [currState,setState] = useState(props.items);

  const checkFunc = (event) =>{
    if(event.target.value === ""){
      setState(props.items)
    }
    const filter = props.items.filter(elem=>elem.includes(event.target.value));
    setState(filter)
  }
  
  return (
    <div>
      <input type = "text" onChange = {checkFunc}/>
      <div>
        {currState.map(elem => <h1>{elem}</h1>)}
      </div>
    </div>
    
  )}
export default Array;
