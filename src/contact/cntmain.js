import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../components/Form';
import { IoMdTime } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa6";
import s from '../img/communication.svg'

export const CntContent = () => {
    return (
        <>
            <Row>
                <Col xs={6} className="contactCol">
                    <h2>Book Now!</h2>
                    <p>Visit our website and fill out our convenient booking form. Simply <br /> select the type of service you need and provide your contact information.</p>
                    <div className="contact-form">
                        {/* <form>

                        <input type="text" placeholder="Name" /> <br /> <br />
                        <input type="Email" placeholder="Email" /><br /><br />
                        <input type="Number" placeholder="Number" /><br /> <br /> */}
                        {/* <select>
                            <option>high rising </option>
                            <option>high rising </option>
                            <option>high rising </option>
                        </select><br /> <br />
                        <textarea rows={4} cols={80} placeholder="message"></textarea><br /> <br /> */}
                        {/* <button>Submit</button>
                        </form> */}
                         <Form />
                    </div>
                </Col>
                <Col xs={4} className="contactCol">
                    <div className="f1 cntf">
                        <center>
                        <IoMdTime />
                            <h3>Saves Your Time</h3>
                            <p>To schedule your cleaning services or learn more about how we can save you time, contact us today at Shine Building Cleaning.</p>
                        </center>
                    </div>
                    <div className="f2 cntf">
                        <center>
                        <FaCcVisa />
                            <h3>Cashless Payment</h3>
                            <p>We offer cashless payment solutions, making it easier than ever to settle your bill for our services.</p>
                        </center>
                    </div>
                    <div className="f3 cntf">

                        <center>
                            <img className="communicationimg" alt="communication" src={s} />
                            <h3>Seamless Communication</h3>
                            <p className="commitment">Our commitment to transparent and efficient communication means that you can always count on us to be responsive, attentive, and easy to reach.
                           </p>
                        </center>
                    </div>
                </Col>

            </Row>
        </>
    )
}