import { List, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function UserList() {
  return (
    <div className="px-24 py-10">
      <h2 className="text-white text-2xl font-semibold mb-4 py-10">
        Your Custom Lists
      </h2>

      <div className="max-w-xl mx-auto bg-[#1d2428] p-6 rounded-lg shadow-md ">
        <div className=" py-10 text-center">
          <h3 className="text-white text-2xl font-medium">
            You have no custom lists
          </h3>
          <p className="text-gray-400 mt-2">
            Start by creating a list and then add movies and TV shows to it!
          </p>

          <Link
            href="/userlist"
            className="mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            <Plus size={20} />
            <span>Create A Custom List</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserList;
