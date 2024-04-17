import React, { memo } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  let count = useSelector((state) => state.counter.value);
  console.log(count);
  return (
    <div className="navbar">
      <h2>Counter : {count}</h2>
    </div>
  );
}

export default memo(Navbar);
