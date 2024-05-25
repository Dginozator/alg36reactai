import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <button count={count} onClick={handleClick}>
        --{count}--
      </button>
    </div>
  );
}
