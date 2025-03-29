import Counter from "./context_API/Counter";
import { CounterProvider } from "./context_API/CounterContext";

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
};

export default App;
