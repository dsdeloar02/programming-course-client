import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const allCourse = useLoaderData();
    const {category_id} = allCourse;
    
    // const cart = useLoaderData();
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-between'>
                <div className='my-5 w-full  lg:w-[25%]'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='w-full lg:w-[70%]'>
                   <div className='m-5 p-5 md:m-10 md:p-10 border rounded-md'>
                        <img src={allCourse.thumbnail_url} alt="" className=' bg-[#f5f5f5] h-[300px] w-full object-contain p-6 rounded-md' />
                        <p className='my-3 font-bold text-xl md:text-2xl' > Course Name : {allCourse.title}</p>
                        <div className='flex justify-between my-4'>
                            <p className='font-bold'> Price : {allCourse.price}</p>
                            <p className='font-bold'> Total View : {allCourse.total_view}</p>
                        </div>
                        <p className='my-3' >{allCourse.details}</p>
                        <button className="bg-red-500 py-3 px-5 text-white mt-3" >
                            <Link to={`/cart/${category_id}`} >Get premium access </Link>
                        </button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
