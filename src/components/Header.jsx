import React from "react";
import { Search } from "lucide-react";
import flag from "../assets/icons/ic_flag_en.svg";
import { FaBars } from "react-icons/fa";
import { auth } from "../config/firebase";

const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <header className="header hidden items-center justify-between bg-white">
      
      <div className="flex items-center gap-4">
        <button
          className=" cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          {isSidebarOpen ? <FaBars size={20} /> : ""}
        </button>
        <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>

      <div className="flex items-center gap-4">
        <img src={flag} alt="UK Flag" className="w-6 h-4" />
        <img
          src={auth.currentUser.photoURL}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
