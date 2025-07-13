import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-new.png';
import frame from "../../assets/Frame (1).png";
import bag from "../../assets/Frame.png";

const Header = ({ isMobileView, isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="bg-white border-b-2 border-gray-300">
      <div className="container mx-auto flex items-center justify-between p-4">
      
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 p-2"
            style={{ fontSize: "2rem" }} 
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
      
        <div className="flex items-center justify-center lg:justify-start">
          <img src={logo} alt="Logo" className="w-20 h-auto sm:w-28" /> 
        </div>
        
     
        <div className="lg:hidden flex space-x-2">
          <img src={bag} alt="Frame" className="h-10 w-auto" /> 
          <img src={frame} alt="Bag" className="h-10 w-auto px-3" /> 
        </div>
        
       
        <div className="hidden lg:flex flex-grow items-center justify-center space-x-7 no-underline ">
          <Link to="/Withdrawal" className="text-gray-800 hover:text-gray-600 text-lg no-underline">Withdrawal</Link> 
          <Link to="/WithdrawalAmount" className="text-gray-800 hover:text-gray-600 text-lg no-underline">Withdrawal Amount</Link> 
          <Link to="/Settings" className="text-gray-800 hover:text-gray-600 text-lg no-underline">Settings</Link>
          {/* <Link to="/live-results" className="text-gray-800 hover:text-gray-600 text-lg no-underline">Live Results</Link>  */}
        </div>
        
        
        <div className="hidden lg:flex space-x-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 text-lg">Download App</button> 
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 text-lg">Login</button> 
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 text-lg">Register</button> 
        </div>
      </div>
    </nav>
  );
}

export default Header;
