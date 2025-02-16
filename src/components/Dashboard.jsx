import React, {useState} from 'react';
import ProgressCard from './DashboardComponents/ProgressCard';
import GroupInfo from './DashboardComponents/GroupInfo';
import OverallProgress from './DashboardComponents/OverallProgress';
import UserProfile from './DashboardComponents/UserProfile';
import Navbar from './Navbar';
import { ChevronRight } from 'lucide-react';
import pen from '../assets/icons/pen.svg'
import dict from '../assets/icons/dict.svg'
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from "react-icons/md";
import user3 from '../assets/icons/grouped avatars.svg'
import Header from './Header';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex bg-amber-200">
      
      <div className={`${isSidebarOpen? 'block' : 'hidden'} navbar2`}>
        <Navbar 
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen
        />
      </div>
      
      
      
      <div className="w-full bg-white p-10">
        <button 
          className="absolute top-4 cursor-pointer" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {
            isSidebarOpen? '' : <FaBars size={20} />
          }
        </button>
        <Header 
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen
        />
        <h1 className='text-3xl font-medium my-6'>Progress Dashboard</h1>
        {/* Main content - 8 columns */}
        <div className="first-card flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-9 w-full">
          {/* Exam Card */}
          <div className="exam-card w-1/2 lg:min-w-[50%] rounded-2xl h-auto sm:h-60 py-6 sm:py-8 px-6 sm:px-8 flex flex-col items-start justify-between gap-4 bg-[#28439D]">
            <div>
              <p className="text-sm font-medium text-white opacity-45 mb-2 sm:mb-4">
                Deadline 12:00
              </p>
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Exam - Unit 5
              </h2>
              <p className="text-sm font-medium text-white opacity-45 mb-2 sm:mb-4">
                Spanish for beginners
              </p>
            </div>
            <img src={user3} alt="users" className='h-10' />
          </div>

          {/* Progress Cards Container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-9 lg:w-full">
            <div className="w-auto sm:w-1/2 lg:w-1/2">
              <ProgressCard 
                title="Homework"
                subtitle="For today's lesson"
                timeAgo="35 MIN AGO"
                type="yellow"
              />
            </div>
            <div className="w-auto sm:w-1/2 lg:w-1/2">
              <ProgressCard 
                title="Reading"
                subtitle="24 words per week"
                timeAgo="2H AGO"
                type="blue"
              />
            </div>
          </div>
        </div>

        {/* Group Info and Overall Progress */}
        <div className="groupinfo flex mt-10 gap-6">
          <GroupInfo />
          <OverallProgress />
        </div>

        <div className='lastdiv flex w-full gap-6 mt-8'>
          <div className='flex w-full items-center justify-between border border-[#E6E7E9] rounded-lg p-5'>
            <div className='flex gap-2.5 items-center sm-'>
              <div className='shadow-gray-300 rounded-full shadow-lg p-3 w-fit'>
                <img src={pen} alt="pen" />
              </div>
              <div className='flex flex-col'>
                <h2 className='text-sm font-medium'>Grammar</h2>
                <p className='text-xs text-[#181819] opacity-40'>+30 grammer rules</p>
              </div>
            </div>

            <div>
              <ChevronRight />
            </div>
          </div>

          <div className='flex w-full items-center justify-between border border-[#E6E7E9] rounded-lg p-5'>
            <div className='flex gap-2.5 items-center'>
              <div className='shadow-gray-300 rounded-full shadow-lg p-3 w-fit'>
                <img src={dict} alt="pen" />
              </div>
              <div className='flex flex-col'>
                <h2 className='text-sm font-medium'>Dictionary</h2>
                <p className='text-xs text-[#181819] opacity-40'>+10 new words</p>
              </div>
            </div>

            <div>
              <ChevronRight />
            </div>
          </div>

        </div>
      </div>

      <UserProfile />
    </div>
  );
};

export default Dashboard; 