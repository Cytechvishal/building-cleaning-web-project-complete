import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import a from './img/mylogo.png'
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Booter=()=>{
    return (
        <>
        <Row className="footerRow">

            <Col xs={2}>
           <center> <img className='footerlogo' src={a} alt="" />
                <p>We’re committed to providing top-quality cleaning services to our valued clients.</p></center>
            </Col>
            <Col xs={1}></Col>
            <Col xs={2}>
                <h2 className="hd4">Quick Links</h2>
                <ul className="ftQuickLink">
                    <li>
                <Link className="my-quickLinks active"  to='/' >Home</Link>
                </li>
                <li>
                <Link className="my-quickLinks" to='/about' >About</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/services' >Services</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/contact' >Contact</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/checking' >Checking</Link>
            </li>
                </ul>
            </Col>
            <Col xs={1}></Col>
            <Col xs={2}>
            <h2 className="hd4">services</h2>
                <ul className="ftQuickLink">
                    <li>
                <Link className="my-quickLinks active"  to='/' >High-rise building cleaning</Link>
                </li>
                <li>
                <Link className="my-quickLinks" to='/about' >Water-fed pole</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/services' >Glass cleaning</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/contact' >external painting</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/checking' >Facade Lighting</Link>
            </li>
            <li>
                <Link className="my-quickLinks" to='/checking' >Facade Clading work</Link>
            </li>
                </ul>
            </Col>
            <Col xs={1}></Col>
            <Col xs={2}>
            <h2 className="hd4">Contact Us</h2>
            <p> <FaPhoneAlt />+918218914034</p>
            <p><CgMail />building@gmail.com</p>
            <p><FaMapMarkerAlt /> Pital Nagar, Moradabad,U.P India </p>


            </Col>

        </Row>
        <Row>
        <center> <p>Copyright © 2024 Shine Building Cleaning | Designed By Thinq Proto</p> </center>
        </Row>
        </>
    )
}