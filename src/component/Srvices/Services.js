import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./education.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <div className='text-center my-5'>
                <h1>All our courses here. Whice one do you need?</h1>
            </div>
            <div className='container my-5'>

                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;