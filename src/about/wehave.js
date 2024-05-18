import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import a from '../img/cleaningHand.svg'
import { CountingSet } from "../chekcontent/counter";
import { EmployeCounting } from "../chekcontent/employecounter";
export const Wehave =()=>{

return(
    <>
    <Row className="werow">
       <center> <h2 >WE HAVE!</h2> </center>

       <Col xs={2} className="WeCounting">
           <center> <img src={a} alt="cleaning" />
            <CountingSet />
           <p className="wePara">Our Services</p></center>
       </Col>
       <Col xs={2} className="WeCounting">
       <EmployeCounting />
       </Col>
       <Col xs={2} className="WeCounting">hjkjkj</Col>
       <Col xs={2} className="WeCounting">vjhgjhjhjh</Col>

    </Row>
    
    </>
)
}