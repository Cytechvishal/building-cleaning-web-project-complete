import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMedal } from "react-icons/fa";

import { FaTrophy } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
export const Abtpromise =()=>{
    return(
        <>
     
     <Row className="prow">
     <center>  <h1>We Promise You</h1></center> 
        <Col xs={2} className="picon">
           <span className="aqua"> <FaMedal /><br /></span>
            <p>Professional Quality Guarantee</p>

        </Col>
        <Col xs={2} className="picon">
        <span className="aqua"> <FaHands /></span>
          <p>  Excellence in Every Cleaning</p>
        </Col>
        <Col xs={2} className="picon"> 
        <span className="aqua">  <FaTrophy /> </span><br />
            <p>Best Product Guarantee</p>
        </Col>
     </Row>
    <center><div className="pcontent" > <p>We promise you: At Shine Building Cleaning, we hold ourselves to the highest standards to ensure your complete satisfaction. With our commitment to excellence. We stand by our promises and strive to exceed your expectations every step of the way.</p> </div></center>
        </>
    )
}
