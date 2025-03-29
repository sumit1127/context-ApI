import { createContext, useState } from "react";
const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  const contextValue = {
    count,
    increment,
  };

  return (
    <>
      <CounterContext.Provider value={contextValue}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterContext;
