import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = () =>{

    }
    return (
        <div className="hero min-h-screen">
      <div className="flex justify-between">
        <div className="card p-10 mx-auto w-full  max-w-sm shadow-2xl">
            <h1 className='font-bold text-2xl text-center'>Log in </h1>
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#b7b7b7]">Email</span>
              </label> 
              <br/>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input border"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input border"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex justify-between">
              <label className="label">
                  <Link to='/' className="label-text-alt link text-[#b7b7b7] hover:text-white">
                    Forgot password?
                  </Link>
                </label>
              <label className="label">
                  <Link to='/register' className="label-text-alt link text-[#b7b7b7] hover:text-white">
                      if you New ? Register
                  </Link>
                </label>
            </div>
            <p className="text-[#b7b7b7] text-center" ><small>Or Sign In With</small></p>
            <div className="flex w-1/2 my-3 justify-between mx-auto">
                <button>Sign In with Gogle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Login;
