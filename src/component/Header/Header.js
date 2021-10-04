
import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                                <Nav.Link href="#link" className='text-light'>Service</Nav.Link>
                                <Nav.Link href="#link" className='text-light'>About</Nav.Link>
                                <Nav.Link href="#link" className='text-light'>Service</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Container className='banner'>
                    <Row>
                        <Col className='text-end text-light border-end
                        border-5 border-danger'>
                            <div className='me-5'>
                                <h2>Welcome <br /> to our <span className='text-danger'>class</span></h2>
                            </div>
                        </Col>
                        <Col className=' ms-5 text-light'>
                            <p>Technical education, the academic and vocational preparation of students for jobs involving applied science and modern technology.</p>
                        </Col>
                    </Row>
                    <div className='text-center mt-5'>
                        <Button variant='danger'>Details</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;