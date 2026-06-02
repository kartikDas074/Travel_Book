'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from '../../lib/auth-client';

const SignUp = () => {
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata=new FormData(e.target);
    formdata=Object.fromEntries(formdata.entries());
    const obj={
      name:formdata.name,
      email:formdata.email,
      password:formdata.password
    }
    
    const { data, error } = await authClient.signUp.email({
      name:formdata.name,
      email:formdata.email,
      password:formdata.password
    }
    );

    console.log(data);
    console.log(error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center text-primary mb-2">
            Create an Account
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-4">
            Join us to track your skills and progress!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full focus:input-primary text-[#FFFFFF]"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="input input-bordered w-full focus:input-primary text-[#FFFFFF]"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="enter a password"
                className="input input-bordered w-full focus:input-primary text-[#FFFFFF]"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm your password"
                className="input input-bordered w-full focus:input-primary text-[#FFFFFF]"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full text-white normal-case text-lg">
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4 text-sm">
            <span>Already have an account? </span>
            <Link href="/login" className="link link-primary font-medium no-underline hover:underline">
              Log In
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;