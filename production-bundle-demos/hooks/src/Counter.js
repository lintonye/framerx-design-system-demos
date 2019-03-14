import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}
