import React from "react";
import profile from "../../assets/profile.svg";
import { ChevronRight } from "lucide-react";
import grammar from "../../assets/icons/grammar.svg";
import dictionary from "../../assets/icons/dictionary.svg";
import read from "../../assets/icons/read.svg";

import { Pencil, Book, BookOpen } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="UserProfile  flex min-w-96 flex-col items-center p-6 bg-[#F5F5F5] min-h-screen lg:items-end lg:px-10">
      {/* Profile Section */}
      <div className="flex flex-col items-center pt-6 w-full">
        <div className="relative">
          <img src={profile} alt="User" className="w-20 h-20 rounded-full" />
          <span className="absolute -bottom-1 -right-2 bg-[#3855B3] border-2 text-white text-xs px-2 py-1 rounded-full">
            5
          </span>
        </div>
        <h2 className="mt-3 text-lg font-semibold">Harrison Philips</h2>
        <p className="text-gray-500">Business analyst</p>
      </div>


      <div className="mt-8 p-6 w-full max-w-xs border border-[#E6E7E9] rounded-lg flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Get - 10% sell price</p>
          <p className="text-xs text-gray-500">for "spanish A2" course</p>
        </div>
        <ChevronRight color="#3855B3" />
      </div>

      {/* Course Progress */}
      <div className="mt-6 w-full max-w-xs">
        <h3 className="text-lg font-semibold">Course Progress</h3>
        <div className="mt-4 space-y-3">
          {/* Grammar */}
          <div className="flex items-center p-6 border border-[#E6E7E9] rounded-lg">
            <span className="text-blue-600 font-semibold mr-3">63%</span>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <img src={grammar} alt="icon" />
              </div>
              <div>
                <p className="text-sm font-semibold">Grammar</p>
                <p className="text-xs text-gray-500">Learn new rules</p>
              </div>
            </div>
          </div>

          {/* Dictionary */}
          <div className="flex items-center p-6 border border-[#E6E7E9] rounded-lg">
            <span className="text-yellow-500 font-semibold mr-3">78%</span>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500 p-2 rounded-lg text-white">
                <img src={dictionary} alt="icon" />
              </div>
              <div>
                <p className="text-sm font-semibold">Dictionary</p>
                <p className="text-xs text-gray-500">Learn 4 new words</p>
              </div>
            </div>
          </div>

          {/* Reading */}
          <div className="flex items-center p-6 border border-[#E6E7E9] rounded-lg">
            <span className="text-pink-500 font-semibold mr-3">34%</span>
            <div className="flex items-center gap-3">
              <div className="bg-pink-500 p-2 rounded-lg text-white">
                <img src={read} alt="icon" />
              </div>
              <div>
                <p className="text-sm font-semibold">Reading</p>
                <p className="text-xs text-gray-500">Train your skill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
