import React from "react";
import { inc } from "../../context/counter";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Main</h2>
      <button onClick={() => dispatch(inc())}>decrement</button>
    </div>
  );
}

export default Main;
