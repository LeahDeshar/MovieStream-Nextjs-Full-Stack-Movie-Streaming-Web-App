"use client";
import { List, Search, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between bg-[#0a0f1b] p-6 px-4 sm:px-6 lg:px-[64px] shadow-2xl shadow-[#008e5d]">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <Image
            src="/images/home/logo.svg"
            alt="Logo"
            width={36}
            height={36}
            className="drop-shadow-lg"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] animate-text">
            Reelgood
          </h1>
        </div>

        <div className="relative flex-1 mx-4 mb-3 sm:mb-0">
          <input
            type="text"
            placeholder="Where to Stream Anything..."
            className="w-full py-3 px-5 rounded-full bg-[#102230] text-white shadow-md placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#00dc89] focus:ring-opacity-50 transition-all"
          />
          <button className="absolute right-4 top-3 text-gray-400 hover:text-white transition-transform transform hover:scale-110">
            <Search size={24} />
          </button>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <UserRound
            className="text-white hover:text-[#00dc89] transition-transform transform hover:scale-110"
            size={28}
          />
          <div className="hidden md:flex items-center space-x-4 sm:space-x-6 text-white font-medium">
            <button
              onClick={toggleModal}
              className="hover:text-[#00dc89] transition-all"
            >
              Login
            </button>
            <Link href="#" className="hover:text-[#00dc89] transition-all">
              Sign Up
            </Link>
          </div>
          <button className="bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-4 sm:px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <List size={20} />
              <span>Create A List</span>
            </div>
          </button>
        </div>
      </div>

      <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-[64px] bg-[#0a0f1b] text-gray-300 font-semibold pt-2 pb-4 shadow-inner">
        <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 mb-4 lg:mb-0">
          <Link
            href="#"
            className="hover:text-[#00dc89] transition-all hover:underline underline-offset-4 decoration-2"
          >
            TV Shows
          </Link>
          <Link
            href="#"
            className="hover:text-[#00dc89] transition-all hover:underline underline-offset-4 decoration-2"
          >
            Movies
          </Link>
          <Link
            href="#"
            className="hover:text-[#00dc89] transition-all hover:underline underline-offset-4 decoration-2"
          >
            New, Coming, Leaving
          </Link>
        </div>
        <Link
          href="#"
          className="hover:text-[#00dc89] transition-all hover:underline underline-offset-4 decoration-2"
        >
          Data & API
        </Link>
      </nav>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Welcome Back!</h2>
            <h2 className="text-2xl mb-4">Login Below</h2>

            <button>CONTINUE WITH FACEBOOK</button>
            <button>LOGIN WITH GOOGLE</button>
            <button>LOGIN WITH APPLE</button>

            <div className="flex justify-center items-center mt-4">
              <p>Sign Up</p>
              <p>Log In</p>
            </div>
            {/* Sign Up */}
            <form className="max-w-md mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter Your Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter Your Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter Your Password
                </label>
              </div>

              <button
                onClick={toggleModal}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>

            {/* Log In */}
            <form className="max-w-md mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                onClick={toggleModal}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
