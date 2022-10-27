import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../images/programming.jpeg";

const Banner = () => {
  return (
    <div
      className="h-[400px] bg-no-reaper flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <h1 className="font-extrabold text-2xl md:text-5xl py-10 z-100 text-black" >Are you Ready For Learn ? </h1>
      <button className="py-2 px-8 md:py-3 md:px-10 bg-slate-900 text-white ">
        <Link to="/course">Explore Now</Link>
      </button>
    </div>
  );
};

export default Banner;
