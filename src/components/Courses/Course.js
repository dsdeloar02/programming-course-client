import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSIdeContent from '../RighSideContent/RightSIdeContent';

const Course = () => {
    // const courses = useLoaderData();
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('https://programming-tech.vercel.app/courses')
        .then( res => res.json())
        .then(data => setCourses(data));
    }, [])
    console.log(courses)
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-between'>
                <div className='my-5 w-full  lg:w-[25%]'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='w-full lg:w-[70%]'>
                    <RightSIdeContent></RightSIdeContent>
                </div>
            </div>
        </div>
    );
}

export default Course;
