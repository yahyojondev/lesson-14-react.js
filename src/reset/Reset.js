import React from "react";
import { useDispatch } from "react-redux";
import { thero } from "../context/counter";

function Reset() {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(thero())} className="reset__btn">
      Reset
    </button>
  );
}

export default Reset;
