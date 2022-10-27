import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SingleCourse from '../singleCourse/SingleCourse'

const RightSIdeContent = () => {
//   const allCourse = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://programming-tech.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories)

//   console.log(course.category_id);

  return (
      <div className='flex flex-wrap justify-center md:justify-between my-5'>
        {
            categories.map(category => <SingleCourse
            category={category}
            ></SingleCourse> )
        }
      </div>
  );
};

export default RightSIdeContent;
