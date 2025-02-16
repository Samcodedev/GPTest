import React, { useState } from "react";
import { FaAngleDown, FaBook, FaCog, FaFileAlt, FaTasks, FaChartBar, FaComments, FaUsers, FaHdd } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import pie from '../assets/icons/pie.svg'
import chart from '../assets/icons/Chart.svg'
import chat from '../assets/icons/Chat.svg'
import User from '../assets/icons/3 User.svg'
import task from '../assets/icons/Document.svg'
import Reports from '../assets/icons/Danger.svg'
import Setting from '../assets/icons/Setting.svg'
import profile from '../assets/profile.svg'
import logo from '../assets/icons/onDark.svg'
import { MdOutlineClose } from "react-icons/md";
import { ChevronsUpDown } from 'lucide-react';



const Navbar = ({setIsSidebarOpen, isSidebarOpen}) => {

  return (
    <aside className="navbar min-w-80 min-h-screen bg-[#3C38CE] text-white p-5 px-8 flex flex-col">
      {/* Logo */}
      {/* <h1 className="text-xl font-bold mb-8 flex items-center">Dlex</h1> */}
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="w-24 mb-6" />
        <MdOutlineClose size={25} onClick={()=> setIsSidebarOpen(!isSidebarOpen)} className="mt-2 cursor-pointer" />
      </div>
      
      <hr className="border-indigo-500 mb-8" />
      
      {/* Team Selection */}
      <div className="bg-indigo-600 p-6 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center rounded-full font-medium mr-3"> <p className="text-sm">DW</p></div>
          <div>
            <p className="text-sm font-bold">Dlex Designs</p>
            <p className="text-xs text-white opacity-40">general team</p>
          </div>
        </div>
        <ChevronsUpDown size={20} />
      </div>
      
      
      {/* Navigation */}
      <nav className="mt-8">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center mb-3 font-bold">
            <img src={pie} alt="dashboard" className="w-6 mr-3" /> Dashboard
          </li>
          <li className="flex items-center mb-3">
          <img src={chart} alt="dashboard" className="w-6 mr-3" /> Overview
          </li>
          <li className="flex items-center mb-3 relative">
            <img src={chat} alt="dashboard" className="w-6 mr-3" /> Chat
            <span className="absolute right-0 bg-[#FFA000] text-xs px-2 py-0.5 rounded-full text-white">5</span>
          </li>
          <li className="flex items-center mb-3">
          <img src={User} alt="dashboard" className="w-6 mr-3" /> Team
          </li>
        </ul>
      </nav>
      
      {/* Shortcuts */}
      <p className="text-xs uppercase font-bold mt-7 mb-4">SHORTCUT</p>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="flex items-center mb-3">
        <img src={task} alt="dashboard" className="w-6 mr-3" /> Tasks
        </li>
        <li className="flex items-center mb-3">
          <img src={Reports} alt="dashboard" className="w-6 mr-3" /> Reports
        </li>
        <li className="flex items-center mb-3">
        <img src={Setting} alt="dashboard" className="w-6 mr-3" /> Settings
        </li>
      </ul>
      
      {/* Storage Component */}
      <div className="mt-auto flex flex-col gap-1.5 bg-[#342BC2] p-7 rounded-lg">
        <div className="flex justify-between text-xs font-bold">
          <p>Storage</p>
          <p className="cursor-pointer font-medium text-[#CACCF7]">Upgrade</p>
        </div>
        <p className="text-sm font-medium">3.4 GB <span className="text-[#CACCF7]"> of 15 GB</span></p>
        <div className="w-full bg-indigo-500 h-1 rounded-full mt-2">
          <div className="bg-white h-1 rounded-full w-1/12"></div>
        </div>
      </div>

      <hr className="border-indigo-500 mt-6" />
      
      {/* User Profile */}
      <div className="mt-6 flex items-center cursor-pointer">
        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3"> <img src={profile} alt="" /> </div>
        <p className="flex-1">Jane Smith</p>
        <ChevronsUpDown size={20} />
      </div>
    </aside>
  );
};

export default Navbar;
