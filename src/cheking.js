import React from 'react';
import './check.css'
import { FormSecond } from "./chekcontent/capitalizedinput";
import { useState } from 'react';
import { Mobile } from './chekcontent/useEffect';
import { CountingSet } from './chekcontent/counter';
export const Checking =()=>{

    // const [color, setColor] = useState('red')
    //  const [co,setCo] = useState('')
    // const [photo,setPhoto] = useState('i/b.jpg')
    const [isDarkMode, setIsDarkMode] = useState(false)
    

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        
    
    };
  
    return(
        <>
        <body className={isDarkMode ? 'dark-mode' : ''}>
            

        
   
        {/* <div className="check1">


       <div style={{color:co}}>
       {color}
       <img src={photo} alt="Hello"/>
        </div> 

        <button  onClick={()=>{
            setColor('blue');
            setCo('blue'); 
            setPhoto('i/b2.jpg');
        }}>Change Color</button>
       
        </div>
        <br /> */}
        <br /><br /><br /><br />

        <div className='bodybutton'>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
        
        {/* <div className='bodybutton'>
        <button  onClick={()=>{
        setLight('black')
    }}>
        DArk_mode
    </button></div> */}

        <FormSecond />
        
        <Mobile />
        <CountingSet />
        </body>
        </>
    )
}