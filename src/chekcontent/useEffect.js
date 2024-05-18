import React, { useState, useEffect } from "react";

export const Mobile = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1);
    }
    return () =>  clearInterval(intervalId);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setCount(0);
    setIsActive(false);
  };

  return (
    <>
      <div>Time is going on ... {count}</div>
      <button onClick={handleStartStop}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
