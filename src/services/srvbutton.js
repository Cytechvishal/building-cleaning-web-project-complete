import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Srvbutton = ()=>{
    const me=(event)=>{
        alert("Oh My God What is this!", event.target)
    }
    return(
        <>
        <Row className="schd">
            <Col xs={1}></Col>
            <Col xs={5} className="schd-p">
                <p>Schedule your cleaning now & Get Free Estimate</p>
            </Col>
            <Col xs={2}></Col>
            <Col xs={2}>
            <button onClick={me} className="schd-btn">Contact Now</button>
            </Col>
        </Row>
        
        </>
    )
}