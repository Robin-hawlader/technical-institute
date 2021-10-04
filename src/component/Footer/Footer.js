import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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
                            <Link to="/home">{element} Home</Link> <br />
                            <Link to="/service">{element} Service</Link> <br />
                            <Link to="/about">{element} About</Link> <br />
                            <Link to="/support">{element} Support</Link>
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