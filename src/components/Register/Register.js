import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, logOut, handleEmailVarification } = useContext(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handleUpdateProfile(name, photoURL);
            verifyEmail();
            logOut();
            console.log(user)
            toast.success('Go to Check email')
        })
        .catch( e => {
            console.error(e)
            setError(e.message);
        })
    };

    const verifyEmail = () => {
        handleEmailVarification()
        .then(()=>{})
        .catch(err => console.error(err))
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL,
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    }


    return (
        <div className="hero my-6">
        <div className="flex justify-between">
          <div className="card p-10 mx-auto w-full  max-w-sm shadow-xl">
            <h1 className="font-bold text-2xl text-center my-3">Register </h1>
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text  w-full inline-block">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you Full Name"
                  name="name"
                  className="input border w-full mt-2 px-3 py-2"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text  w-full inline-block">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you Photo Url"
                  name="photoURL"
                  className="input border w-full mt-2 px-3 py-2"
                  required
                />
              </div>
              <div className="form-control mt-4">
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
                  Register Now
                </button>
              </div>
              <div className="flex justify-between mb-3">
                <label className="label">
                  <Link to="/" className="">
                    <small>Forgot password?</small>
                  </Link>
                </label>
                <label className="label">
                  <Link to="/login" className="">
                    <small>Allready Registered ? Log in</small>
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
}

export default Register;
