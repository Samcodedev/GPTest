// Updated Dashboard React Component
// Ensuring exact UI match with provided design

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiDashboardFill } from 'react-icons/ri';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineTaskAlt, MdOutlineSettings } from 'react-icons/md';
import { BsBarChart } from 'react-icons/bs';

const SubDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside 
        animate={{ width: isSidebarOpen ? 250 : 80 }}
        className="bg-blue-900 text-white flex flex-col p-5 relative"
      >
        <button 
          className="absolute top-4 right-4 text-white" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={20} />
        </button>
        <div className="text-lg font-bold mb-10">Dlex</div>
        <nav className="flex flex-col space-y-4">
          <a className="flex items-center gap-3 p-2 rounded hover:bg-blue-800" href="#">
            <RiDashboardFill size={20} /> {isSidebarOpen && 'Dashboard'}
          </a>
          <a className="flex items-center gap-3 p-2 rounded hover:bg-blue-800" href="#">
            <HiChatBubbleLeftRight size={20} /> {isSidebarOpen && 'Chat'}
          </a>
          <a className="flex items-center gap-3 p-2 rounded hover:bg-blue-800" href="#">
            <AiOutlineTeam size={20} /> {isSidebarOpen && 'Team'}
          </a>
          <a className="flex items-center gap-3 p-2 rounded hover:bg-blue-800" href="#">
            <MdOutlineTaskAlt size={20} /> {isSidebarOpen && 'Tasks'}
          </a>
          <a className="flex items-center gap-3 p-2 rounded hover:bg-blue-800" href="#">
            <MdOutlineSettings size={20} /> {isSidebarOpen && 'Settings'}
          </a>
        </nav>
      </motion.aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
          <div className="text-lg font-semibold">Progress Dashboard</div>
          <div className="flex items-center space-x-4">
            <IoMdNotificationsOutline size={24} className="cursor-pointer" />
            <FaUserCircle size={24} className="cursor-pointer" />
          </div>
        </div>
        
        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md">
            <div className="text-sm">DEADLINE: 12:00</div>
            <div className="text-xl font-bold">Exam - Unit 5</div>
            <div className="text-sm">Spanish for beginners</div>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <div className="text-sm">Homework</div>
            <div className="text-xs">For today’s lesson</div>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <div className="text-sm">Reading</div>
            <div className="text-xs">24 words per week</div>
          </div>
        </div>
        
        {/* Course Progress */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="text-lg font-semibold">Overall Progress</div>
          <div className="text-sm">Germany for beginners</div>
          <div className="w-full bg-gray-200 h-2 rounded mt-2">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '75%' }}></div>
          </div>
          <div className="text-right text-sm mt-1">75%</div>
        </div>
      </div>
    </div>
  );
};

export default SubDashboard;