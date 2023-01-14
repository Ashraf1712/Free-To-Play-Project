import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DataFetching from "./components/DataFetching";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-3xl underline">Hello World!</div>
      <DataFetching />
    </>
  );
}

export default App;
