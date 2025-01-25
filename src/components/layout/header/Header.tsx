import { List, Search, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between bg-[#0a0f1b] p-6 px-4 sm:px-6 lg:px-[64px] shadow-md">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
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

        <div className="relative flex-1 mx-4 mb-4 sm:mb-0">
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
            <Link href="#" className="hover:text-[#00dc89] transition-all">
              Login
            </Link>
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

      <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-[64px] bg-[#0a0f1b] text-gray-300 font-semibold py-4 shadow-inner">
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
    </header>
  );
}

export default Header;
