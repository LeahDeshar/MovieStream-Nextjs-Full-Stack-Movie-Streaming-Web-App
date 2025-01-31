"use client";
import { List, Search, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateListOpen, setCreateListOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCreateList = () => {
    setCreateListOpen(!isCreateListOpen);
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
              <button onClick={handleCreateList}>Create A List</button>
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

      {/* {isModalOpen && (
        <div className="fixed  inset-0 z-20  ">
          <div className="w-screen  h-screen   ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {isLogin ? "Welcome Back!" : "Create an Account"}
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Continue with Facebook
              </button>
              <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                Login with Google
              </button>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
                Login with Apple
              </button>
            </div>
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 font-semibold rounded-l-lg border transition ${
                  isLogin
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 font-semibold rounded-r-lg border transition ${
                  !isLogin
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>
            {isLogin ? (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Login Below
                </h3>
                <form className="space-y-6">
                  <div className="relative group">
                    <input
                      type="email"
                      name="login_email"
                      id="login_email"
                      className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="password"
                      name="login_password"
                      id="login_password"
                      className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Log In
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Sign Up Below
                </h3>
                <form className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Enter Your Email Address"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )} */}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center "
          style={{
            backgroundColor: " rgba(8, 17, 24, 1)",
            backgroundImage:
              "linear-gradient(125deg, rgba(134, 121, 249, 0.05), rgba(113, 255, 151, 0.06))",
          }}
        >
          <button
            onClick={toggleModal}
            className="text-white bg-white/25 rounded-full px-2 py-1 hover:text-gray-400 focus:outline-none absolute top-10 right-10"
          >
            ✕
          </button>
          <div className="w-full max-w-md p-6 ">
            <div className="text-center  mb-6">
              {isLogin ? (
                <>
                  <h2 className="text-2xl font-bold text-white">
                    Welcome Back!
                  </h2>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Login Below
                  </h3>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white">
                    Create an Account
                  </h2>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Free forever.
                  </h3>
                </>
              )}
            </div>

            <div className="space-y-3 mb-6">
              <button className="w-full py-3 bg-[#4a90e2] text-white font-semibold rounded-3xl hover:bg-blue-700 transition">
                Continue with Facebook
              </button>
              <button className="w-full py-3 bg-white text-[#4a4a4a] font-semibold rounded-3xl hover:bg-red-600 transition">
                Login with Google
              </button>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-3xl hover:bg-gray-800 transition">
                Login with Apple
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 font-semibold rounded-l-lg border transition ${
                  isLogin
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 font-semibold rounded-r-lg border transition ${
                  !isLogin
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            {isLogin ? (
              <div>
                <form className="space-y-6">
                  <input
                    type="email"
                    name="login_email"
                    className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="password"
                    name="login_password"
                    className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Log In
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <form className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    className="w-full py-2 border-b border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Enter Your Password"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {isCreateListOpen && (
        <div className="bg-black w-full h-screen absolute top-0 ">
          <div
            className="fixed inset-0 z-20  min-w-[360px] max-w-[360px]"
            style={{
              backgroundColor: " rgba(8, 17, 24, 1)",
              backgroundImage:
                "linear-gradient(125deg, rgba(134, 121, 249, 0.05), rgba(113, 255, 151, 0.06))",
            }}
          >
            <p>HEllo</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
