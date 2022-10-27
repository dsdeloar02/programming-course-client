import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://programming-tech.vercel.app/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h4 className='text-2xl font-semibold text-center my-3' > Category List : </h4>
            <div className='categoryWrapper flex flex-wrap'>
                {
                    categories.map(category => <p className='my-2 mx-2 py-3 px-3 w-full bg-red-500 inline-block text-white hover:bg-red-700' key={category.id}>
                        <Link className='block'  to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
}

export default LeftSideNav;
