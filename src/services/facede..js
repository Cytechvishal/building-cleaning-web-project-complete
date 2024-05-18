import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from '../img/b1.jpg'
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.webp'



export const Srvfacede=()=>{
    return (
        <>
        <center><h3 className="hd3">Facade & painting</h3></center>
          <Row className="cnt2-row">
            <Col xs={3} className="content21">
         <div >
          <img className="im1" src={b1} alt=''/>
         </div>
          <h3 className="srvhd3">External Painting</h3>
          <div className="cleaningp1">
           <p>Cleaning a high-rise building is not the safest job in the world and as a client, you would want your building cleaned perfectly.</p>
          </div>
            </Col>
            <Col xs={3} className="content21">
            <div >
          <img className="im1" src={b2} alt=''/>
         </div>
         <h3 className="srvhd3">Facade cladding Work</h3>
         <div className="cleaningp1">
           <p>The water used goes through a special filtration system that filters all the unnecessary minerals to make the pure water have a specific reading to be used for window cleaning.</p><br />
           <br />
           
          </div>
                
            </Col>
            <Col xs={3} className="content21">
            <div >
          <img className="im1" src={b3} alt=''/>
         </div>
         <h3 className="srvhd3">Facade Lighting</h3>
        
         <div className="cleaningp1">
         <p>The water used goes through a special filtration system that filters all the unnecessary minerals to make the pure water have a specific reading to be used for window cleaning.</p><br />
          </div>
            </Col>
           
          </Row>
          
        
        </>
      );
}