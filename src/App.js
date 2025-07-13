import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header.jsx";
import First from "./Components/Main/First_Block/First.jsx";
import Second from "./Components/Main/Second/Second.jsx";
import Third from "./Components/Main/Third/Third.jsx";
import Sidebar from "./Components/Main/Sidebar/Sidebar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import BottomNavbar from "./Components/Main/BottomNavbar/BottomNavbar.jsx";
import Withdrawal from "./Components/Header/Pages/Withdrawal.jsx";
import WithdrawalAmount from "./Components/Header/Pages/WithdrawalAmount.jsx";


import RedPage from "./Components/Main/First_Block/EntryPage/RedPage.jsx";
import BluePage from "./Components/Main/First_Block/EntryPage/BluePage.jsx";
import LotteryCards from "./Components/Main/First_Block/First.jsx";
import Settings from "./Components/Header/Pages/Settings.jsx";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-sky-50 relative">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-opacity duration-300 ${
          isSidebarOpen ? "blur-sm" : ""
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LotteryCards />
                <Second />
                <Third />
                <Footer />
              </>
            }
          />
          <Route path="/Withdrawal" element={<Withdrawal />} />
          <Route path="/WithdrawalAmount" element={<WithdrawalAmount />} />
          <Route path="/Settings" element={<Settings/>} />
          {/* <Route path="/LiveResults" element={<LiveResults />} /> */}
          <Route path="/RedPage" element={<RedPage />} /> 
          <Route path="/BluePage" element={<BluePage/>}/>
          {/* Add a closing tag for the Route element */}
        </Routes>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default App;
