import React, { useEffect, useState } from 'react';

export const EmployeCounting =()=>{
  const[initial, setInitial]  =useState(0);

  useEffect(()=>{
  let currentValue = initial;
    const interval = setInterval(() => {
      currentValue++;
      setInitial(currentValue);
      if (currentValue >= 100) {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
}, []);
return(
    <>
    <div className="CountingNumber">{initial} +</div>
    </>
)

}
