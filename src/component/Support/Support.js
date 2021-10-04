import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import programmer from '../../instructor/download.jpg';
import designer from '../../instructor/Dr_Tim.png';
import driver from '../../instructor/images.jpg';
import image from '../../instructor/it-instructor-in-a-computer-lab58c4ebecebf74de8973e047e0c79cc22.jpg'

const Support = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='text-center my-5'>Contact our instructor</h2>
                <div className='my-5'>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={programmer} />
                                <Card.Body>
                                    <Card.Title>Name: Maria binte</Card.Title>
                                    <Card.Text>
                                        <p>Cntact us for details about this Course</p>
                                        <p>We are alwys at your service.</p>
                                        <p>Phone: (+95)8732457</p>
                                        <p>Email: mariabinte65@gmail.com</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={designer} />
                                <Card.Body>
                                    <Card.Title>Name: Davide</Card.Title>
                                    <Card.Text>
                                        <p>Cntact us for details about this Course</p>
                                        <p>We are alwys at your service.</p>
                                        <p>Phone: (+95)65342365</p>
                                        <p>Email: davidedew@gmail.com</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={driver} />
                                <Card.Body>
                                    <Card.Title>Name: John lathan</Card.Title>
                                    <Card.Text>
                                        <p>Cntact us for details about this Course</p>
                                        <p>We are alwys at your service.</p>
                                        <p>Phone: (+95)948376458</p>
                                        <p>Email: johnlathan45@gmaol.com</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>Name: Mr. Dowson</Card.Title>
                                    <Card.Text>
                                        <p>Cntact us for details about this Course</p>
                                        <p>We are alwys at your service.</p>
                                        <p>Phone: (+95)76568767</p>
                                        <p>Email: mr.dowson54@gmail.com</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Support;