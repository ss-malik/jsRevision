import { useState } from "react";
import "./App.css";
import UseState from "./Components/UseState";
import Data from "./Components/Data";
import Props, { Shoes, Cart } from "./Components/Object";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseState />
      <Data />
      <Props />
      <Shoes />
      <Cart />
    </>
  );
}

export default App;
