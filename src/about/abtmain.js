import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from '../img/b1.jpg'

export const AbtContent=()=>{
    return(
        <>
        <Row className="abtmain">
           
            <Col xs={4} className="abtmain1">
            <img className="abtimg" src={b1} alt=''/>
            </Col>
            
            <Col xs={6} className="abtmain2">
                <h2>Know About Our Company!</h2>
                <p>Established by trained and highly qualified and influential cleaning professionals from the UK, Shine is raising the level in the cleaning industry. We specialize in high rise cleaning services to all your high-rise window cleaning issues. With the influence, intelligence and professional experience, we are here to provide a quality of service like no other. Being professional and doing things right at the same time having debatably the best rates in the market, we are the company you have been looking for. Being member of the British Window Cleaning Academy and Clear Choice, we are here with a strong mission to be the best in the region. All our high-rise window cleaners are certified by the Dubai Accreditation Council and staff are supervised by UK qualified supervisors who are health and safety certified and window cleaning professionals.</p>
            </Col>
        </Row>
        </>
    )
}