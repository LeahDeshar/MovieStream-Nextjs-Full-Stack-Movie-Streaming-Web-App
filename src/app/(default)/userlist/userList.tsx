"use client";
// import { Eye, EyeOff, List, Plus, X } from "lucide-react";
// import Link from "next/link";
// import React, { useState } from "react";

// function UserList() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [listName, setListName] = useState("");
//   const [description, setDescription] = useState("");
//   const [isPrivate, setIsPrivate] = useState(true);
//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const togglePrivacy = () => setIsPrivate(!isPrivate);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("List Name:", listName);
//     console.log("Description:", description);
//     console.log("Privacy:", isPrivate ? "Private" : "Public");
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="max-w-xl mx-auto text-center">
//       <h2 className="text-lg font-semibold mb-4">Your Custom Lists</h2>

//       <div className="bg-[#1d2428] p-6 rounded-lg shadow-md">
//         <h3 className="text-white text-lg font-medium">
//           You have no custom lists
//         </h3>
//         <p className="text-gray-400 mt-2">
//           Start by creating a list and then add movies and TV shows to it!
//         </p>

//         <button
//           onClick={toggleModal}
//           className="mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105 text-sm sm:text-base"
//           aria-label="Create a new list"
//         >
//           <List size={20} />
//           <span>Create A List</span>
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#1d2428] p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <button
//               className="absolute top-3 right-3 text-gray-400 hover:text-white"
//               onClick={toggleModal}
//             >
//               <X size={24} />
//             </button>

//             <h2 className="text-lg font-semibold text-white mb-4">
//               Create a Custom List
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="List Name"
//                 value={listName}
//                 onChange={(e) => setListName(e.target.value)}
//                 className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
//                 required
//               />

//               <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
//                 <span className="text-white">
//                   {isPrivate ? "Private" : "Public"}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={togglePrivacy}
//                   className="text-gray-400 hover:text-white"
//                 >
//                   {isPrivate ? <EyeOff size={24} /> : <Eye size={24} />}
//                 </button>
//               </div>

//               <div className="flex gap-5">
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105"
//                 >
//                   Create
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserList;

import { useState } from "react";
import { List, Eye, EyeOff, X } from "lucide-react";

export default function UserList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [lists, setLists] = useState([]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const togglePrivacy = () => setIsPrivate(!isPrivate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listName.trim()) return;

    // Add the new list to the state
    setLists([...lists, { name: listName, isPrivate }]);

    // Reset fields and close modal
    setListName("");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-lg font-semibold mb-4">Your Custom Lists</h2>
      <div className="bg-[#1d2428] p-6 rounded-lg shadow-md">
        <h3 className="text-white text-lg font-medium">
          You have no custom lists
        </h3>
        <p className="text-gray-400 mt-2">
          Start by creating a list and then add movies and TV shows to it!
        </p>

        <button
          onClick={toggleModal}
          className="mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105 text-sm sm:text-base"
          aria-label="Create a new list"
        >
          <List size={20} />
          <span>Create A List</span>
        </button>
      </div>
      {lists.length > 0 ? (
        <div className="space-y-4">
          {lists.map((list, index) => (
            <div key={index} className="bg-[#1d2428] p-4 rounded-lg shadow-md">
              <h3 className="text-white text-lg font-medium">{list.name}</h3>
              <p className="text-gray-400">
                No movies or shows in this list.{" "}
                <span className="text-green-400 cursor-pointer">
                  Add Some Here
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#1d2428] p-6 rounded-lg shadow-md">
          <h3 className="text-white text-lg font-medium">
            You have no custom lists
          </h3>
          <p className="text-gray-400 mt-2">
            Start by creating a list and then add movies and TV shows to it!
          </p>
        </div>
      )}
      <button
        onClick={toggleModal}
        className="mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105 text-sm sm:text-base"
        aria-label="Create a new list"
      >
        <List size={20} />
        <span>Create A List</span>
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#1d2428] p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={toggleModal}
            >
              <X size={24} />
            </button>

            <h2 className="text-lg font-semibold text-white mb-4">
              Create a Custom List
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="List Name"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                required
              />

              <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                <span className="text-white">
                  {isPrivate ? "Private" : "Public"}
                </span>
                <button
                  type="button"
                  onClick={togglePrivacy}
                  className="text-gray-400 hover:text-white"
                >
                  {isPrivate ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>

              <div className="flex gap-5">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="w-full bg-gray-700 px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:bg-gray-600 transition-all transform hover:scale-105"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl hover:from-[#00dc89] hover:to-[#00bf76] transition-all transform hover:scale-105"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
