import React from 'react';
import mark1 from '../../assets/icons/mark1.svg'
import mark2 from '../../assets/icons/mark2.svg'

const ProgressCard = ({ title, subtitle, timeAgo, type }) => {
  
  return (
    <div className={` ${type==='yellow'? 'bg-[#FFF8E1]' : 'bg-[#E1F5FD]'} w-full h-fit sm:h-full p-4 sm:p-6 rounded-xl flex flex-col justify-between shadow-sm`}>
      <div>
        {
          type==='yellow'?
          <img src={mark1} className='w-6 mb-2' alt="mark" /> :
          <img src={mark2} className='w-6 mb-2' alt="mark" />
        }
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm font-medium text-[#181819] opacity-40 mb-4">{subtitle}</p>
      </div>
      
      <div className="text-xs font-medium mt-4">{timeAgo}</div>
    </div>
  );
};

export default ProgressCard; 