import React from "react";
import { ChevronRight } from "lucide-react";
import { MdOutlineNotificationsNone } from "react-icons/md";

const GroupInfo = () => {
  return (
    <div className="border w-full rounded-lg p-6 border-[#E6E7E9]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Group info</h2>
          <p className="text-sm text-gray-600 mb-4">13 students in the group</p>
        </div>
        <MdOutlineNotificationsNone fontSize={25} color="#181819" />
      </div>

      <div className="bg-[#FF9365] flex justify-between items-center rounded-lg p-4">
        <div>
          <h3 className="font-semibold mb-2 text-white">Group homework</h3>
          <p className="text-sm text-white font-extralight">
            4 students from your group online now
          </p>
        </div>
        <ChevronRight color="white" />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Today's lesson</h3>
        <p className="text-sm text-gray-600">unit 6 - Article</p>
      </div>
    </div>
  );
};

export default GroupInfo;
