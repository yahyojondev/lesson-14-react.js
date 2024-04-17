import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counter, { dec, inc } from "../../context/counter";

function Decrement() {
  const dispatch = useDispatch();
  const [number, setnumber] = useState("");
  let value = useSelector((state) => state.counter.value);
  return (
    <div className="count__wrapper">
      <input onChange={(e) => setnumber(e.target.value)} type="number" />
      <button disabled={value <= 0} onClick={() => dispatch(dec(+number))}>
        -
      </button>
    </div>
  );
}

export default Decrement;
