import React from "react";
import image from "../../../assets/image 6.png";
import bag from "../../../assets/Frame.png";
import group from "../../../assets/Group.png";
import frame1 from "../../../assets/Frame (1).png";
import group1 from "../../../assets/Group (1).png";
import frame2 from "../../../assets/Frame (2).png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-xl focus:outline-none"
      >
        &times;
      </button>
      <div className="p-4 sm:p-6">
        <div className="flex items-center mt-4 sm:mt-8">
          <img src={image} alt="logo" className="w-12 h-12 rounded-full" />
          <div className="ml-2 sm:ml-4">
            <div className="text-base sm:text-lg font-semibold text-blue-800">
              Vignesh
            </div>
            <div className="text-gray-600 text-xs sm:text-sm">+9876543210</div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8">
          <SidebarItem icon={group} text="My Account" bgColor="bg-green-100" textColor="text-green-400" borderColor="border-green-700" />
          <SidebarItem icon={bag} text="Wallet" bgColor="bg-orange-100" textColor="text-orange-400" borderColor="border-orange-700" />
          <SidebarItem icon={group1} text="Top Winners" bgColor="bg-purple-100" textColor="text-purple-400" borderColor="border-purple-700" />
          <SidebarItem icon={frame1} text="Notification" bgColor="bg-yellow-100" textColor="text-yellow-400" borderColor="border-yellow-700" />
          <SidebarItem icon={frame2} text="Help & Support" bgColor="bg-blue-100" textColor="text-blue-400" borderColor="border-blue-700" />
          <SidebarItem icon={bag} text="Settings" bgColor="bg-pink-100" textColor="text-pink-400" borderColor="border-pink-700" />
        </div>
        <div className="mt-8 sm:mt-12">
          <SidebarLink text="Privacy & Policy" textColor="text-gray-600" />
          <SidebarLink text="Terms & Conditions" textColor="text-gray-600" />
          <SidebarLink text="Sign Out" textColor="text-red-600" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, bgColor, textColor, borderColor }) => (
  <div className={`p-2 sm:p-4 rounded-lg text-center flex flex-col items-center min-h-20 ${bgColor}`}>
    <div className={`icon-circle ${borderColor}`}>
      <img src={icon} alt={text} className="icon" />
    </div>
    <span className={`text-xs sm:text-sm ${textColor}`}>{text}</span>
  </div>
);

const SidebarLink = ({ text, textColor }) => (
  <div className={`py-1 sm:py-2 text-xs sm:text-sm ${textColor}`}>
    {text}
  </div>
);

export default Sidebar;
