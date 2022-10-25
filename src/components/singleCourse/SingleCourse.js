import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({category}) => {
    return (
        <div>
            <div className="border p-5 rounded-md">
            <img
              src={category.thumbnail_url}
              alt=""
              className="h-[250px] p-5 bg-[#f5f5f5] w-full rounded-md"
            />
            <h1 className="font-bold py-3 my-3">{category.name}</h1>
            <Link to={`/category/${category.id}`} className='py-2 px-5 bg-gray-600 text-white' >View Details</Link>
          </div>
        </div>
    );
}

export default Course;
