import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="hero min-h-screen">
      <div className="flex justify-between">
        <div className="card p-10 mx-auto w-full  max-w-sm shadow-2xl">
          <h1 className="font-bold text-2xl text-center">Log in </h1>
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text  w-full inline-block">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input border w-full mt-2 px-3 py-2"
                required
              />
            </div>
            <div className="form-control  mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input border w-full mt-2 px-3 py-2"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="bg-red-500 text-white w-full py-2 mb-3">
                Login
              </button>
            </div>
            <div className="flex justify-between mb-3">
              <label className="label">
                <Link to="/" className="">
                  <small>Forgot password?</small>
                </Link>
              </label>
              <label className="label">
                <Link to="/register" className="">
                  <small>if you New ? Register</small>
                </Link>
              </label>
            </div>
            <p className="text-[#b7b7b7] text-center">
              <small>Or Sign In With</small>
            </p>
            <div className="my-3">
              <button className="py-2 my-2 w-full bg-orange-400 text-white">
                Sign In with Gogle
              </button>
              <button className="py-2 w-full bg-blue-400 text-white">
                Sign In with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
