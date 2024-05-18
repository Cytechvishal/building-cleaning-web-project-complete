import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from './img/certificate.jpg'



export const Certificate=()=>{
    return (
        <>

      
          <Row className="certificating">
           <h3 className="hd3">Certified By UAE Government</h3>
            <Col  xs={2} className="certificate21">
         <div >
          <img className="im2" src={b1} alt=''/>
         </div>
          <h3 className="hd5">Professional License</h3>
          
            </Col>
            
            <Col xs={2} className="certificate21">
            <div >
          <img className="im2" src={b1} alt=''/>
         </div>
         <h3 className="hd5">Register Certificate</h3>
         
                
            </Col>
            
            <Col xs={2} className="certificate21">
            <div >
          <img className="im2" src={b1} alt=''/>
         </div>
         <h3 className="hd5">Main Board Permit</h3>
        
         
            </Col>
            
            <Col xs={2} className="certificate21">
            <div >
          <img className="im2" src={b1} alt=''/>
         </div>
         <h3 className="hd5">Real Beneficiary</h3>
        
         
            </Col>
            
          </Row>
          
        
        </>
      );
}