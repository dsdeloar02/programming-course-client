import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSIdeContent from '../RighSideContent/RightSIdeContent';

const Course = () => {
    // const courses = useLoaderData();
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then(data => setCourses(data));
    }, [])
    console.log(courses)
    return (
        <div className='container mx-auto'>
            <div className='grid  grid-cols-4 gap-4'>
                <div className='my-5'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-3'>
                   <div>
                    <RightSIdeContent></RightSIdeContent>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
