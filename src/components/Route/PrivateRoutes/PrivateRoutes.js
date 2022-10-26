import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='bg-red-500 h-screen flex flex-col justify-center items-center'><h2 className='font-bold text-3xl text-center text-white' >Loading...</h2></div>
    }
    if(!user){
        return <Navigate to='/login' state={{ from : location }} ></Navigate>
    }
    return children;
}

export default PrivateRoutes;
