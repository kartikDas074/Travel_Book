'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center text-primary mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-4">
            Login to access your dashboard and tracker.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
           
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:input-primary"
                onChange={handleChange}
                required
              />
            </div>

           
            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                <label className="label-text font-medium">Password</label>
                <a href="/forgot-password" className="text-xs link link-primary no-underline hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:input-primary"
                onChange={handleChange}
                required
              />
            </div>

          
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="checkbox checkbox-primary checkbox-sm rounded"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="label-text text-sm">Remember me</span>
              </label>
            </div>

          
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full text-white normal-case text-lg">
                Log In
              </button>
            </div>
          </form>

         
          <div className="text-center mt-4 text-sm">
            <span>New here? </span>
            <Link href="/signup" className="link link-primary font-medium no-underline hover:underline">
              Create an Account
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;