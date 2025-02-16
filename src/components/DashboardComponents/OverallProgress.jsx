import React from 'react';
import { ChevronRight } from 'lucide-react';
import flag from '../../assets/icons/germany.svg'

const OverallProgress = () => {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg border-[#E6E7E9] border">
      <div className='p-6'>
        <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
      </div>

      <div className='px-6 flex justify-between items-center'>
        <h1 className='text-2xl w-1/3 font-normal'>Germany for beginners</h1>
        <div className='shadow-gray-300 rounded-full shadow-lg p-3 w-fit'>
          <img src={flag} alt="flag" />
        </div>
      </div>

      <div className='px-6 mt-3'>
        <div className="w-full bg-[#F0F1F2] h-2 rounded-full mt-2 overflow-hidden">
          <div className="bg-[#3855B3] h-2 w-8/12"></div>
        </div>
      </div>

      <p className='text-lg mx-6 mb-10 mt-5'>75%</p>

      <div className='flex border-t items-center gap-2 justify-end p-4 border-t-[#E6E7E9]'>
        <p className='text-[#3855B3] cursor-pointer'>Explore more</p>
        <ChevronRight color='#3855B3' size={15} className='cursor-pointer' />
      </div>
    </div>
  );
};

export default OverallProgress