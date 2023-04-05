import React, { useState } from "react";

function CounterNew() {
  const [count, setState] = useState(0);

  const clickHandler = () => {
    setState(count + 1);
  };

  return (
    <div>
      <button onClick={clickHandler}>Count - {count}</button>
    </div>
  );
}

export default CounterNew;
