import React from "react";
import { Link } from "react-router-dom";
import group from "../../../assets/Group 101.svg";
import draw from "../../../assets/4DrawIcon.png";
import dus from "../../../assets/dus_banner.png";
import raj from "../../../assets/raj_banner.png";
import guaranteed from "../../../assets/guranteed tag 3num.png";
import Slider from "../../Swiper/Slider";

const First = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Slider />

      <div className="rounded-lg p-2 flex flex-col md:flex-row justify-center gap-9">
        <div className="flex mb-8 w-full md:w-1/2 p-4  ">
          <div className="bg-white rounded-lg p-4 text-center relative w-56">
            <div className="w-10 h-10 bg-[#f0f9ff] rounded-full absolute top-[-20px] right-[-20px] z-[99]"></div>
            <div className="text-md font-bold mb-4">Price Pool: 100 </div>
            <img src={group} alt="Group" className="mx-auto mb-4" />
            <div className="text-xl font-bold mb-2 text-red-500">25000</div>
            <div className="text-xs"> Prize </div>
          </div>

          <div className="bg-red-500 rounded-lg text-center relative w-full ">
            <div className="w-10 h-10 bg-[#f0f9ff] rounded-full absolute bottom-[-20px] left-[-20px] z-[99]"></div>

            <img
              src={guaranteed}
              alt="Guaranteed"
              className="absolute inset-0 m-auto"
              style={{ zIndex: -1 }}
            />
            <p className="text-white text-xs mt-4 pl-2">
              Pick a 3-digit Number from 000 to 999 and Win Big!
            </p>
            <div className="text-white text-lg my-2 flex justify-center">
              <div className="grid grid-cols-3 gap-4 text-center pl-2">
                <div>
                  <p>00</p>
                  <div className="text-white text-md mb-4">HOURS</div>
                </div>
                <div>
                  <p>03</p>
                  <div className="text-white text-md mb-4">MIN</div>
                </div>
                <div>
                  <p>04</p>
                  <div className="text-white text-md mb-4">SEC</div>
                </div>
              </div>
            </div>

            <Link to="/RedPage">
              <button className="text-white border border-white px-4 py-2">
                Entry ₹25
              </button>
            </Link>
            <p className="text-white mt-4">2 | View all Draws &gt;</p>
          </div>
        </div>

        <div className="flex mb-8  md:w-1/2 p-4 w-full">
          <div className="bg-white rounded-lg p-4  relative text-center w-56">
            <div className="w-10 h-10 bg-[#f0f9ff] rounded-full absolute top-[-20px] right-[-20px] z-[99]"></div>
            <div className="text-md font-bold mb-4">Price Pool: 350</div>
            <img src={draw} alt="Draw" className="mx-auto mb-4" />
            <div className="text-xl font-bold mb-2 text-blue-500">25000</div>
            <div className="text-xs">Price </div>
          </div>

          <div className="bg-blue-500 rounded-lg text-center relative w-full ">
            <div className="w-10 h-10 bg-[#f0f9ff] rounded-full absolute bottom-[-20px] left-[-20px] z-[99]"></div>

            <img
              src={guaranteed}
              alt="Guaranteed"
              className="absolute inset-0 m-auto"
              style={{ zIndex: -1 }}
            />
            <p className="text-white text-xs mt-4 pl-2">
              Pick a 3-digit Number from 000 to 999 and Win Big!
            </p>
            <div className="text-white text-lg my-2 flex justify-center">
              <div className="grid grid-cols-3 gap-4 text-center pl-2">
                <div>
                  <p>00</p>
                  <div className="text-white text-md mb-4">HOURS</div>
                </div>
                <div>
                  <p>03</p>
                  <div className="text-white text-md mb-4">MIN</div>
                </div>
                <div>
                  <p>04</p>
                  <div className="text-white text-md mb-4">SEC</div>
                </div>
              </div>
            </div>

            <Link to="/BluePage">
              <button className="text-white border border-white px-4 py-2">
                Entry ₹25
              </button>
            </Link>
            <p className="text-white mt-4">2 | View all Draws &gt;</p>
          </div>
        </div>
      </div>

      {/* First Red Card */}

      {/* First Red Card */}

      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4">
          <img src={dus} alt="Dus Banner" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img src={raj} alt="Raj Banner" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default First;
