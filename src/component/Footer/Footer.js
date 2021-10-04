import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faAngleRight} />
const graduation = <FontAwesomeIcon icon={faGraduationCap} />
const clock = <FontAwesomeIcon icon={faClock} />

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <Container>
                <Row>
                    <Col className='text-light'>
                        <div>
                            <h2>{graduation} Education</h2>
                            <p>the act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgment, and generally of preparing oneself or others intellectually for mature life.</p>
                        </div>
                    </Col>
                    <Col>
                        <nav className='link-decorate text-light'>
                            <h3>Main Links</h3>
                            <a href="/home">{element} Home</a> <br />
                            <a href="/service">{element} Service</a> <br />
                            <a href="/about">{element} About</a> <br />
                            <a href="/details">{element} Details</a>
                        </nav>

                    </Col>
                    <Col className='text-light'>
                        <div className='opening'>
                            <h3>Opening Hours</h3>
                            <p>{clock} Sat-Thu 9.00-18.00 <br /><span className='text-danger'><b>Friday closed</b></span></p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;