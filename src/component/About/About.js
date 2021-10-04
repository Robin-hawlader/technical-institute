import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import image from '../../images/How-can-education-improve-the-sustainable-development-of-the-world.jpg';
import contact from '../../images/contact-page-banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const phone = <FontAwesomeIcon icon={faPhone} />
const email = <FontAwesomeIcon icon={faVoicemail} />


const About = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Container className='my-5'>
                    <Row>
                        <Col>
                            <img className='w-100 rounded border border-5 border-gray' src={image} alt="" />
                        </Col>
                        <Col>
                            <div className='my-5'>
                                <h2 className='about'><span className='border-bottom border-danger border-4'>About</span> Us</h2>
                            </div>
                            <p className='description'>A technical institute offers programs that teach students about technology systems and the technical aspects of a particular career through hands-on training. Academic courses are not taught at these institutions. Many technical institutes offer degree programs, and some degrees can be earned via distance learning.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <div className='my-5'>
                                <h2 className='about'><span className='border-bottom border-danger border-4'>Contact</span> Us</h2>
                            </div>
                            <p>{phone} Phone: (+8801) 23456789</p>
                            <p>{email} Email: fake-email420@gmail.com</p>
                        </Col>
                        <Col>
                            <img src={contact} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;