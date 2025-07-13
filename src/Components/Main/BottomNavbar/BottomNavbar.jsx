import React from "react";

const BottomNavbar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-300 flex justify-evenly items-center py-4 z-50">
      <div className="flex flex-col items-center text-gray-500">
        <i className="fas fa-home text-lg"></i>
        <span className="text-xs">Home</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <i className="fas fa-ticket-alt text-lg"></i>
        <span className="text-xs">Tickets</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <i className="fas fa-chart-line text-lg"></i>
        <span className="text-xs">Results</span>
      </div>
      <div className="flex flex-col items-center text-gray-500">
        <i className="fas fa-shopping-cart text-lg"></i>
        <span className="text-xs">Cart</span>
      </div>
    </div>
  );
};

export default BottomNavbar;
