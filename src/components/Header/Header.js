import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-100 ' >
            <div className="container mx-auto md:flex justify-between py-6">
                <div className='flex items-center text-slate-600 w-[300px]'>
                    <h1>Programming Tech</h1>
                </div>
                <ul className='md:flex md:justify-end md:items-center w-full'>
                    <li className='mx-2 py-2 px-4 hover:bg-[#6419E6]'>
                        <NavLink to='/' >Home</NavLink>
                    </li>
                    <li className='mx-2 py-2 px-4 hover:bg-[#6419E6]'>
                        <NavLink to='/course' >Course</NavLink>
                    </li>
                    <li className='mx-2 py-2 px-4 hover:bg-[#6419E6]'>
                        <NavLink>Review</NavLink>
                    </li>
                    <li className='mx-2 py-2 px-4 hover:bg-[#6419E6]'>
                        <NavLink>Log In</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
