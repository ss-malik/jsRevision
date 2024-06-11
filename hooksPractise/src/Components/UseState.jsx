import React, { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState(0);

  const handlerIncr = () => setNum(num + 1);

  return (
    <>
      <div>
        <h2>{num}</h2>
      </div>
      <button onClick={handlerIncr}>Increment</button>
    </>
  );
};

export default UseState;
