import { useState } from "react";

export function Counter() {
  const [value, setvalue] = useState(0);

  function add() {
    setvalue(value + 2) 
  }

  function sub() {
    setvalue(value - 2)       
  }

  return (
    <div className="box">
      <h1>{value}</h1>
      <div className="mybtn">
        <button className="btn btn2" onClick={sub}>Decrement</button>
        <button className="btn" onClick={add}>Increment</button>
      </div>
    </div>
  );
}
