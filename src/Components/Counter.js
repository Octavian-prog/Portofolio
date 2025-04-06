import React, { useState } from "react";
import "../Styles/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  // Determine the class for the count based on its value
  const getCountClass = () => {
    if (count > 0) return "positive";
    if (count < 0) return "negative";
    return "neutral";
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      {/* Display the current count with a dynamic class */}
      <p className={getCountClass()}>Current Count: {count}</p>
      {/* Buttons to increase, decrease, or reset the count */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;