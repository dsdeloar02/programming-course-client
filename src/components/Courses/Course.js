import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSIdeContent from '../RighSideContent/RightSIdeContent';

const Course = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='container mx-auto'>
            <div className='grid  grid-cols-4 gap-4'>
                <div className='my-5'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-3'>
                   <div className='grid grid-cols-3 gap-4 my-5'>
                    {
                        courses.map(course => <RightSIdeContent 
                            key={course.id}
                            course = {course}
                            ></RightSIdeContent>)
                    }
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
