import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const allCourse = useLoaderData();
    const cart = useLoaderData();
    return (
        <div className='container mx-auto'>
            <div className='grid  grid-cols-4 gap-4'>
                <div className='my-5'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-3'>
                   <div className='m-10 p-10 border rounded-md'>
                        <img src={allCourse.thumbnail_url} alt="" className=' bg-[#f5f5f5] h-[300px] w-full object-contain p-6 rounded-md' />
                        <p className='my-3 font-bold text-2xl' > Course Name : {allCourse.title}</p>
                        <div className='flex justify-between my-4'>
                            <p className='font-bold'> Price : {allCourse.price}</p>
                            <p className='font-bold'> Total View : {allCourse.total_view}</p>
                        </div>
                        <p>{allCourse.details}</p>
                        <button className="bg-gray-800 py-3 px-5 text-white mt-3" >
                            <Link to={`/cart/${cart.id}`} >Buy Now {allCourse.category_id} </Link>
                        </button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
