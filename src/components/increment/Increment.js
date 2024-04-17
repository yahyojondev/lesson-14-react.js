import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inc } from "../../context/counter";

function Increment() {
  const dispatch = useDispatch();
  const [number, setnumber] = useState("");
  return (
    <div className="count__wrapper">
      <input onChange={(e) => setnumber(e.target.value)} type="number" />
      <button onClick={() => dispatch(inc(+number))}>+</button>
    </div>
  );
}

export default Increment;
