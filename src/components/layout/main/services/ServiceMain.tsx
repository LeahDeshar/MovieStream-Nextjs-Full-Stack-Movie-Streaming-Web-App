"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

function ServiceMain() {
  const [dropdown, setDropdown] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };
  return (
    <div>
      <h1 className="text-2xl text-white"> Combine Your Services</h1>
      <p className="text-base text-gray-400 text-center">
        Hit the + to add each service you use. You won't need account info (like
        your Netflix login) to combine your services. Reelgood will link you
        directly to the service to play an episode or movie.
      </p>

      <div>
        <div className="flex flex-row mx-4 mb-3 sm:mb-0">
          <input
            type="text"
            placeholder="Search for Services"
            className="w-full py-3 px-5  rounded-s-full bg-[#102230] text-white shadow-md placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#00dc89] focus:ring-opacity-50 transition-all"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-black rounded-e-full text-gray-400 hover:text-white"
          >
            FILTERS
          </button>
        </div>
        {/* {showFilters && (
          <div className="bg-gray-800 p-4 rounded-md shadow-md flex justify-center items-center  space-x-3">
            <p className="text-white ">View by Category</p>
            <div className="flex justify-between items-center space-x-5">
              {["Popular", "Free", "Subscription", "TV Everywhere"].map(
                (category) => (
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-md peer-checked:bg-[#00dc89] peer-checked:border-[#00dc89]  items-center justify-center">
                      ✓
                    </span>
                    <span className="text-white">{category}</span>
                  </label>
                )
              )}
            </div>
          </div>
        )} */}
        {showFilters && (
          <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col space-y-3">
            <p className="text-white text-center">View by Category</p>
            <div className="flex justify-center space-x-5">
              {["Popular", "Free", "Subscription", "TV Everywhere"].map(
                (category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="hidden peer"
                    />
                    <span
                      className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
                        selectedCategory === category
                          ? "bg-[#00dc89] border-[#00dc89]"
                          : "border-gray-400"
                      }`}
                    >
                      <div
                        className={` ${
                          selectedCategory === category
                            ? "bg-[#ffffff] border-[#00dc89]"
                            : "bg-transparent"
                        } h-3 w-3 rounded-sm`}
                      />
                    </span>
                    <span className="text-white">{category}</span>
                  </label>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceMain;
