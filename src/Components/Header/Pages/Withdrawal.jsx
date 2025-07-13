import React, { useState } from "react";
import refresh from "../../../assets/Group 167.png";

const Withdrawal = () => {
  const initialText = "Balance";
  const [balanceAmount, setBalanceAmount] = useState("₹ 5742.60");
  const [inputValue, setInputValue] = useState("");

  const data = [500, 800, 1000, 2000, 5000, 10000, 2000, 50000];

  const getRandomNumber = () => {
    const randomNumber = (Math.random() * (10000 - 1000) + 1000).toFixed(2);
    return `₹ ${randomNumber}`;
  };

  const handleRefreshClick = () => {
    setBalanceAmount(getRandomNumber());
  };

  const handleButtonClick = (amount) => {
    setInputValue(amount);
  };

  return (
    <div className="mt-10">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="relative w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mb-4 bg-purple-600 rounded-2xl leading-4 shadow-md text-white pl-6 md:pl-12 py-2 flex items-center">
          <div className="mt-2 md:mt-4">
            <p>{initialText}</p>
            <p className="text-md md:text-lg flex items-center">
              {balanceAmount}
              <img
                src={refresh}
                alt="refresh icon"
                className="h-4 w-4 ml-2 cursor-pointer"
                onClick={handleRefreshClick}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="w-full flex justify-center">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex-col items-center justify-center shadow-md rounded-lg bg-white p-2 md:p-4">
          <div className="w-full rounded-lg p-2 md:p-4 bg-[#EBEDF1]">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-[#EBEDF1] text-md outline-none w-full"
            />
          </div>
          <div className="flex items-center py-2">
            <div className="text-[#1D3C67] px-2">
              Min
              <span className="px-2 text-[#1D3C67] font-semibold">₹ 200</span>
            </div>
            <div className="text-[#1D3C67] px-2">
              Max
              <span className="px-2 text-[#1D3C67] font-semibold">₹ 50000</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {data.map((amount, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(amount)}
                className="text-center text-[#1D3C67] font-semibold px-2 p-2 md:p-3 rounded-lg bg-[#EBEDF1]"
              >
                {amount}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Third */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col">
          <input
            type="text"
            placeholder="Payment Gateway"
            className="h-32 md:h-40 bg-white rounded-2xl leading-4 shadow-md p-4"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <button
          className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-16 md:h-24 bg-purple-600 rounded-2xl leading-4 shadow-md text-white mt-4 mb-7"
        >
          Deposit
        </button>
      </div>
    </div>
  );
};

export default Withdrawal;
