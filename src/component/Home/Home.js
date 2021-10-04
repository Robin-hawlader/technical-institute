import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("./education.JSON")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const courses = blogs.slice(0, 4);
    return (
        <div>
            <div className='my-5 text-center'>
                <h1>Our top courses</h1>
            </div>
            <div className='container my-5'>

                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;