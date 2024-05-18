import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


export const Content=(props)=>{

  

    return (
        <>
        
          <Row className="cntnr">
            <Col xs={7} className="content1">
            <div className="content-text">
                <h2>{props.h0.h1}</h2>
                <p>Shine Building Cleaning is raising the level in the cleaning industry. We specialize in high rise cleaning services to all your high-rise window cleaning issues. With the influence, intelligence and professional experience, we are here to provide a quality of service like no other.



                </p>

              {
                <ul>
                  {
                    props.dd.map((c)=>{
                      return(
                        <>
                        <li>I am provide {c}</li>
                        </>
                      )
                    })
                  }
                </ul>
              }

              {/* {
                <ul>
                  {
                    props.ddd.map((b)=>{
                      return(
                        <>
                        <li>I am {b.id} {b.brand}</li>
                        </>
                      )
                    })
                  }
                </ul>
              } */}
                
            </div>
            <div className="content-text">
                <h2>{props.h0.h2}</h2>
                <p>At Shine Building cleaning , we take pride in our team of dedicated professionals, including supervisors at levels 2 and 3.
<br></br><br></br>
Our Supervisor Level 2 brings extensive experience and leadership skills to our cleaning operations, ensuring efficiency and adherence to safety standards.
<br /><br />
Meanwhile, our Supervisor Level 3 boasts years of industry expertise, focusing on strategic planning and continuous improvement.</p>
            </div>
            </Col>
            <Col xs={5} className="content2">
                <span>Call us!</span> <br />
                <Link to='tel:-9389250843'><button className="contentbtn">9389250843</button></Link>
            </Col>
          </Row>
          
        
        </>
      );
}