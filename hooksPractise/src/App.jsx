import { useState } from "react";
import "./App.css";
import UseState from "./Components/UseState";
import Data from "./Components/Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseState />
      <Data />
    </>
  );
}

export default App;
