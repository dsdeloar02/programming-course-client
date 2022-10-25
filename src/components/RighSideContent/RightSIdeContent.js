import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SingleCourse from '../singleCourse/SingleCourse'

const RightSIdeContent = () => {
//   const allCourse = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories)

//   console.log(course.category_id);

  return (
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
            categories.map(category => <SingleCourse
            category={category}
            ></SingleCourse> )
        }
      </div>
  );
};

export default RightSIdeContent;
