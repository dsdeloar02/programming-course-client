import React, { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {BsFillBrightnessHighFill }  from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isShown, setIsShown] = useState(false);
    console.log(user)
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


    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }

    console.log(user?.displayName)

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
                    <li className='mx-2 '>
                       {
                        user? 
                        <div className='flex relative'>
                            <button className='px-3 mr-2 bg-black text-white' onClick={handleLogOut} >Log Out </button>
                            <button 
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                            >
                                <img src={user?.photoURL} alt="" className='h-10 w-10 rounded-full' />
                            </button>
                            <div className='absolute top-12 right-0'>
                                {
                                    isShown && 
                                    <div>
                                        <p className='bg-red-500 rounded-lg py-1 px-2 ' >{user?.displayName}</p>                                        
                                    </div>
                                }
                            </div>
                            
                        </div>
                        
                        :  <NavLink to='/login' className='bg-[#6419E6] py-2 px-4' >Log In</NavLink>
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
