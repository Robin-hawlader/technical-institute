import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { thumbnail, Service_name, description, fee } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{Service_name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4>Course-fee: ${fee}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;