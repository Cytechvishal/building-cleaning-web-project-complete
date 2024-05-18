import React, { useState, useEffect } from "react";

export const CountingSet = () => {
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    let currentValue = initial;
    const interval = setInterval(() => {
      currentValue++;
      setInitial(currentValue);
      if (currentValue >= 20) {
        clearInterval(interval);
      }
    }, 100); // Interval runs every second (1000 milliseconds)

    // Clean up function to clear interval when component unmounts   
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="CountingNumber">{initial} +</div>
    </>
  );
};
