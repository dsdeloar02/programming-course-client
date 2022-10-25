import React from 'react';

const RightSIdeContent = ({course}) => {

    return (
        <div className='border p-5 rounded-md'>
            <img src={course.thumbnail_url} alt="" className='h-[250px]' />
            <h1 className='font-bold py-3'>{course.title}</h1>
            <button className='py-2 px-5 bg-slate-900 text-white' >View Details</button>
        </div>
    );
}

export default RightSIdeContent;
