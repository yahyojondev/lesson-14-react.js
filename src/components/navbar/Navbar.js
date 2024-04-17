import React, { memo } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  let count = useSelector((state) => state.counter.value);
  console.log(count);
  return (
    <div>
      <h2>Navbar {count}</h2>
    </div>
  );
}

export default memo(Navbar);
