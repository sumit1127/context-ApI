import { useContext } from "react";
import CounterContext from "./CounterContext";

const Counter = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
