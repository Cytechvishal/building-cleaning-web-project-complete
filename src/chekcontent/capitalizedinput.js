import React, { useState } from "react";
import '../check.css'

export const FormSecond =()=> {
    const [firstName, setFirstName]= useState({
        firstName : ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFirstName({
          ...firstName,
          [name]: value
        });
      };
    
    // 1. Small letter to  Capital letter
    const handleSubmit = () => {
        const capitalizedFirstName = firstName.firstName.toUpperCase();
        setFirstName({
            ...firstName,
            firstName: capitalizedFirstName
        });
        // Send data to Firebase database or perform any other action here
    };

    // 2. Counting of length
    const handSubmit = () => {
      // Filter out spaces and count only letters
      const letterCount = firstName.firstName.replace(/\s/g, '').length;
      document.getElementById('counting').innerHTML = letterCount;
  };
  
    // const handSubmit =()=>{
    //   document.getElementById('counting').innerHTML = firstName.firstName.length 
       
    // };

    //3. Capital letter to Small letter

    const smallSubmit =()=>{
      const smallizedfirstName = firstName.firstName.toLocaleLowerCase()
      setFirstName({
      ...firstName,
        firstName: smallizedfirstName
      })
    }

   


      return(
        <>
            <div className="textutils">
            Name:
        <input type="text" name="firstName" value={firstName.firstName}  onChange={handleChange} className="txtinput"
        /> <br />
        <p id="counting"></p>
        <button type="submit" onClick={handleSubmit}>Capitalized</button>
        <button type="submit" onClick={handSubmit}>Count</button>
        <button type="submit" onClick={smallSubmit}>Small</button>
        
        <br /><br /><br /><br /><br />
        
            </div>
        </>
      )
};
