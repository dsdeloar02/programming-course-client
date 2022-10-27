import React from 'react';

const Team = ({member}) => {
    const {name, image, post} = member;
    console.log(member)
    return (
        
                <div className='w-full my-2 md:w-[30%] p-6 border rounded-md shadow-lg'>
                    <img src={image} alt="" className='w-full rounded-full' />
                    <div className='text-center bg-gray-600 py-2 mt-3 rounded-sm'>
                        <h1 className='text-white font-semibold text-xl' >{name}</h1>
                        <p className='text-white mt-2' > {post}</p>
                    </div>
                </div>
    );
}

export default Team;
