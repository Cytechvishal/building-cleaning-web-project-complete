import React from "react";
import { Link } from "react-router-dom";
import './App.css'
import logo from './img/mylogo.png'


export const Nav=()=>{
    return(
        <>
        <ul className="my-nav">
        <li>
                <Link className="my-path" to='/' >
                <img src={logo} alt="Logo" />
                </Link>
            </li>
            <li>
                <Link className="my-path " to='/' >Home</Link>
            </li>
            <li>
                <Link className="my-path" to='/about' >About</Link>
            </li>
            <li>
                <Link className="my-path" to='/services' >Services</Link>
            </li>
            <li>
                <Link className="my-path" to='/contact' >Contact</Link>
            </li>
            <li>
                <Link className="my-path" to='/checking' >Checking</Link>
            </li>
        </ul>
        </>
    )
}