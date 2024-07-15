import { useState } from "react";
import "./App.css";
import UseState from "./Components/UseState";
import StateRef from "./Components/StateRef";
import Data from "./Components/Data";
import Props, { Shoes, Cart } from "./Components/Object";
import Resmenu from "./Components/Resmenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Resmenu />
      {/* <StateRef /> */}
      {/* <UseState />
      <Data />
      <Props />
      <Shoes />
      <Cart /> */}
    </>
  );
}

export default App;
