import React from "react";

import { useStore } from "../hooks-store/store";

const Counter = () => {
  const [state, dispatch] = useStore();

  return (
    <div>
      <p> Add {state.counter}counter </p>
      <button onClick={() => dispatch("ADD", 1)}>ADD 1</button>
      <button onClick={() => dispatch("SUB", 1)}>SUB 1</button>
      <button onClick={() => dispatch("ADD", 5)}>ADD 5</button>
      <button onClick={() => dispatch("SUB", 5)}>SUB 5</button>
    </div>
  );
};

export default Counter;
