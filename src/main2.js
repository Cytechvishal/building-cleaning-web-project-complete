import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import b3 from './img/b3.webp'
import { FaCheck } from "react-icons/fa";


export const Content2=()=>{
    return (
        <>
        
          <Row className="cnt2-row">
          <center><h3 className="hd3" id="hd3heading">Our Services</h3></center>
            <Col xs={3} className="content21">
         <div >
          <img className="im1" src={b1} alt=''/>
         </div>
          <h3 className="hd4">Cleaning</h3>
          <div className="iconlist">
          <FaCheck/> <span>High-rise Building Cleaning</span><br />
          <FaCheck/> <span>Water-fed pole</span><br />
          <FaCheck/> <span>Glass Cleaning</span>
          </div>
            </Col>
            <Col xs={3} className="content21">
            <div >
          <img className="im1" src={b2} alt=''/>
         </div>
         <h3 className="hd4">Maintanence</h3>
         <div className="iconlist">
          <FaCheck/> <span>High-rise Building Cleaning</span><br />
          <FaCheck/> <span>Water-fed pole</span><br />
          <FaCheck/> <span>Glass Cleaning</span>
          </div>
                
            </Col>
            <Col xs={3} className="content21">
            <div >
          <img className="im1" src={b3} alt=''/>
         </div>
         <h3 className="hd4">Facade & Painting</h3>
        
         <div className="iconlist">
          <FaCheck/> <span>High-rise Building Cleaning</span><br />
          <FaCheck/> <span>Water-fed pole</span><br />
          <FaCheck/> <span>Glass Cleaning</span>
          </div>
            </Col>
           
          </Row>
          
        
        </>
      );
}