import React from "react";
import { inc, dec } from "../../context/counter";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="forms">
        <input type="number" />
        <button onClick={() => dispatch(inc(1))}>increment 1</button>
        <br />
        <input type="number" />
        <button onClick={() => dispatch(dec(1))}>decrement 1</button>
      </div>
    </div>
  );
}

export default Main;
