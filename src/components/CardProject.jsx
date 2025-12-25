import React from "react";

const CardProject = ({user}) => {

  return (
    <div className="flex items-center justify-baseline bg-[#111]">
      <div className="rounded shadow-lg w-40 px-2 py-2 bg-white h-auto m-3">
        {/* Background Image */}
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src={user.backgroundImage}
            alt="background"
            className="w-full  object-cover rounded-lg"
          />

          {/* Profile Image */}
          <img
            src={user.image}
            alt={user.name}
            className="w-12 h-12 rounded-full border-2 border-pink-700 absolute -bottom-6.5 left-12 bg-white"
          />
        </div>

        {/* User Info */}
        <div className="mt-7 flex items-center justify-between">
          <h2 className="font-medium text-sm">{user.name}</h2>
          <div className="flex items-center">
            <i className="ri-heart-fill text-xs text-pink-600"></i>
            <h2 className="text-[10px]">{user.likes}</h2>
          </div>
        </div>

        <h3 className="text-[7px] mb-1 mt-1 text-gray-700">{user.bio}</h3>

        {/* Followers and Following */}
        <div>
          <h2 className="text-[9px]">Followers: {user.followers}</h2>
          <h2 className="text-[9px]">Following: {user.following}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
