import React, { useRef, useState } from "react";

const StateRef = () => {
  const [timer, setTimer] = useState(0);
  const timerId = useRef();
  let startHandle = () => {
    timerId.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 100);
  };
  let stopHandle = () => {
    clearInterval(timerId.current);
  };

  return (
    <>
      <button onClick={startHandle}>Start</button>
      <p>{timer}</p>
      <button onClick={stopHandle}>Stop</button>
    </>
  );
};

export default StateRef;
