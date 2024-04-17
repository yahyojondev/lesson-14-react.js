import React, { useState } from "react";
import counter, { inc, dec, thero } from "../../context/counter";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const [number, setnumber] = useState("");
  return (
    <div>
      <div className="forms">
        <div className="input__wrapper">
          <div className="count__wrapper">
            <input type="number" />
            <button onClick={() => dispatch(inc(1))}>+</button>
          </div>
          <div className="count__wrapper">
            <input type="number" />
            <button onClick={() => dispatch(dec(1))}>-</button>
          </div>
        </div>
        <button className="reset__btn" onClick={() => dispatch(thero(0))}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Main;
