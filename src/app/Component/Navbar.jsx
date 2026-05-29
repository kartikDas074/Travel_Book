"use client";

import Image from "next/image";
import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  // মেইন নেভিগেশন লিঙ্কস (টেক্সট কালার ব্ল্যাক/নেভি ব্লু শেড করা হয়েছে)
  const links = (
    <>
      <li>
        
        <Navlink
          href="/"
          className="text-gray-900 hover:text-orange-500 hover:bg-orange-50 lg:hover:bg-transparent transition duration-300 font-medium px-3 py-2 rounded-xl lg:p-0 block"
        >
          Home
        </Navlink>
      </li>

      <li>
        <Navlink
          href="/destination"
          className="text-gray-900 hover:text-orange-500 hover:bg-orange-50 lg:hover:bg-transparent transition duration-300 font-medium px-3 py-2 rounded-xl lg:p-0 block"
        >
          Destination
        </Navlink>
      </li>

      <li>
        <Navlink
          href="/my-booking"
          className="text-gray-900 hover:text-orange-500 hover:bg-orange-50 lg:hover:bg-transparent transition duration-300 font-medium px-3 py-2 rounded-xl lg:p-0 block"
        >
          My Booking
        </Navlink>
      </li>

      <li>
        <Navlink
          href="/admin"
          className="text-gray-900 hover:text-orange-500 hover:bg-orange-50 lg:hover:bg-transparent transition duration-300 font-medium px-3 py-2 rounded-xl lg:p-0 block"
        >
          Admin
        </Navlink>
      </li>
    </>
  );

  return (
    // মেইন নেভবার ব্যাকগ্রাউন্ড পিওর #FFFFFF করা হয়েছে
    <nav className="w-full bg-[#FFFFFF] border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LEFT SIDE (Desktop Links & Mobile Hamburger) */}
        <div className="flex items-center">
          {/* ডেস্কটপ স্ক্রিনের লিঙ্কস */}
          <ul className="hidden lg:flex items-center gap-8 text-[16px] font-medium">
            {links}
          </ul>

          {/* মোবাইল মেনু */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 hover:bg-transparent text-gray-900"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10M4 18h16"
                />
              </svg>
            </div>

            {/* মোবাইল ড্রপডাউন ব্যাকগ্রাউন্ড ও বর্ডার */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-[#FFFFFF] border border-gray-100 rounded-2xl w-56 space-y-1"
            >
              {links}

              {/* মোবাইল ড্রপডাউনের অতিরিক্ত লিঙ্কসমূহ */}
              <div className="border-t border-gray-100 pt-2 mt-2 space-y-1">
                <li>
                  <Navlink href="/profile" className="text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl">
                    Profile
                  </Navlink>
                </li>
                <li>
                  <Navlink href="/login" className="text-gray-900 hover:text-orange-500 hover:bg-orange-50 rounded-xl">
                    Login
                  </Navlink>
                </li>
                <li>
                  <Navlink href="/signup" className="text-orange-500 font-semibold hover:bg-orange-50 rounded-xl">
                    Sign Up
                  </Navlink>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="flex items-center">
          <>
            <Image
              src="/assets/Wanderlast.png"
              alt="Wanderlast Logo"
              width={140}
              height={45}
              className="object-contain max-h-11 w-auto"
              priority
            />
          </>
        </div>

        {/* RIGHT SIDE (Desktop Buttons) */}
        <div className="hidden lg:flex items-center gap-5">
          <Navlink
            href="/profile"
            className="font-medium text-gray-900 hover:text-orange-500 transition"
          >
            Profile
          </Navlink>

          <Navlink
            href="/login"
            className="px-5 py-2 text-sm rounded-full border border-gray-300 text-gray-900 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50/50 transition font-medium"
          >
            Login
          </Navlink>

          <Navlink
            href="/signup"
            className="px-5 py-2 text-sm rounded-full bg-orange-500 hover:bg-orange-600 text-white transition font-medium shadow-md shadow-orange-500/10"
          >
            Sign Up
          </Navlink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;