import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between bg-black p-4">
        <div className="flex items-center space-x-2">
          <Image
            src={"/images/home/logo.svg"}
            alt="Logo"
            width={100}
            height={100}
          />
          <div className="text-green-500 font-bold text-xl">Reelgood</div>
        </div>

        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Where to Stream Anything..."
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#081118] via-[#081118] to-[#025c39] text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
          />
          <button className="absolute right-3 top-2.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm6.32-6.32l4.36 4.36"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-6 text-white">
          <a href="#" className="hover:text-green-500">
            TV Shows
          </a>
          <a href="#" className="hover:text-green-500">
            Movies
          </a>
          <a href="#" className="hover:text-green-500">
            New, Coming, Leaving
          </a>
          <a href="#" className="hover:text-green-500">
            Data & API
          </a>
          <a href="#" className="hover:text-green-500">
            Login
          </a>
          <a href="#" className="hover:text-green-500">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
