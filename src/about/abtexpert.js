import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from '../img/b1.jpg'
import { FaCheck } from "react-icons/fa";

export const Abtexpert=()=>{
    return(
        <>
        <Row className="abtexp">
            
            <Col xs={5} className="abtexp2">
               <h2 className="hd3">Our Cleaning Experts</h2>
                <p>Our cleaning experts are more than just professionals – they’re dedicated individuals with years of experience and a passion for delivering exceptional service..</p>
                <p>
                <FaCheck/> <span>Customized Cleaning Solutions</span><br />
          <FaCheck/> <span>Reliability and Consistency</span><br />
          <FaCheck/> <span>Trained and Trustworthy Staff</span><br />
          <FaCheck/> <span>Quick and efficient cleaning</span>
                </p>
            </Col>
            <Col xs={6} className="abtexp1">
            <img className="abtexpimg" src={b1} alt=''/>
            </Col>
        </Row>
        </>
    )
}