import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({category}) => {
    return (
            <div className="border text-center my-3 p-5 rounded-md w-full md:w-[45%] lg:w-[30%]">
            <img
              src={category.thumbnail_url}
              alt=""
              className="h-[220px] p-5 bg-[#f5f5f5] w-full rounded-md"
            />
            <h1 className="font-bold py-3 my-3">{category.name}</h1>
            <Link to={`/category/${category.id}`} className='py-2 px-5 bg-red-500 text-white' >View Details</Link>
          </div>
    );
}

export default Course;
