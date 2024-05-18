import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Btn2 } from "./main2btn3";
import { FaCheck } from "react-icons/fa";

export const M3content=()=>{
    return (
        <>
        
          <Row className="cntnr1">
          
            <Col xs={1}></Col>
            <Col xs={5} className="content1">
            <div className="M3content-txt">
               <center> <h2>Why choose us</h2></center>
                <p>Shine Building Cleaning is raising the level in the cleaning industry. We specialize in high rise cleaning services to all your high-rise window cleaning issues. With the influence, intelligence and professional experience, we are here to provide a quality of service like no other.</p>

               
            </div>
            <Btn2 />
            </Col>
            <Col xs={1}></Col>
            <Col xs={5} className="contentMain3">
            <div>
            <FaCheck/> <span>Customized Cleaning Solutions</span><br /><br />
          <FaCheck/> <span>Reliability and Consistency</span><br /><br />
          <FaCheck/> <span>Trained and Trustworthy Staff</span><br /><br />
          <FaCheck/> <span>Quick and efficient cleaning</span>
              </div>
                
            </Col>
            
          </Row>
          
        
        </>
      );
}