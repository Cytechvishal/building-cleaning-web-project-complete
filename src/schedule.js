import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Schedule = ()=>{
    return(
        <>
        <Row className="schd">
            <Col xs={1}></Col>
            <Col xs={6} className="schd-p">
                <p>Schedule your cleaning now & Get Free Estimate</p>
            </Col>
            <Col xs={2}></Col>
            <Col xs={2}>
            <button className="schd-btn">Contact Now</button>
            </Col>
        </Row>
        
        </>
    )
}