import React, { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {BsFillBrightnessHighFill }  from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [background, setBackground] = useState(false)
    const [theme, setTheme] = useState('light-theme');
    const handleBgChange = () => {
        if(theme === "dark-theme" ){
            // setBackground(true)
            setTheme('light-theme')
        }else{
            // setBackground(false)
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div className=' ' >
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
                       {
                        user? <p>asi</p> :  <NavLink to='/login' >Log In</NavLink>
                       }
                    </li>
                    <button onClick={() => handleBgChange(setBackground(!background))} >
                       {
                            !background ? <CiDark className='text-black w-6 h-5' /> : <BsFillBrightnessHighFill className='text-white w-6 h-5' />
                       } 
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
