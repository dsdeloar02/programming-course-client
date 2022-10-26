import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div className='categoryWrapper'>
                {
                    categories.map(category => <p className='my-2 py-3 px-3 w-full bg-red-500 text-white' key={category.id}>
                        <Link  to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
}

export default LeftSideNav;
