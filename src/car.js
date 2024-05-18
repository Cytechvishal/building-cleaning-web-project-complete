import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import a from './img/a.webp'
import b from './img/b.jpg'
import c from './img/c.jpg'


export const Car = () => {
    return (
        <div className='caro' style={{ display: 'block'}}>

            <Carousel>
                <Carousel.Item interval={1500}>
                    <img className='myimg' src={a} alt="" />
                    <div className="overlay">
                        <div >
                    <Carousel.Caption>
                        <h3 className="carousel-text">Shine Building Cleaning</h3>
                        <p>Your trusted partner in Building Cleaning, your satisfaction is our priority</p>
                    </Carousel.Caption></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className='myimg' src={b} alt="" />
                    <div className="overlay">
                    <div >
                    <Carousel.Caption>
                        <h3 className="carousel-text">Choose us for you cleaning needs</h3>
                        <p>Experience the convenience of profession cleaning service with shine building cleaning. </p>
                    </Carousel.Caption></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className='myimg' src={c} alt="" />
                    <div className="overlay">
                    <div >
                    <Carousel.Caption>
                        <h3 className="carousel-text">Get in Touch</h3>
                        <p>Contact us today and experience the convenience of professional cleaning done right. we're just a phone call or email away</p>
                    </Carousel.Caption></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
