import React from "react";

import Footer from "../../../Footer/Footer";
import Tickets from "./Tickets";

const EntryPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-1">
  <div className="w-auto border bg-white mt-10 p-3 rounded-lg shadow-md">
    <h4 className="font-bold text-lg text-red-500">#LOTOZYV307</h4>
    <div className="flex justify-between items-center">
      <div className="mr-4">
        <h5 className="text-gray-700">Entry Fee: ₹25 | Prize Pool: ₹25000</h5>
      </div>
      <div className="text-center ml-4">
        <div className="text-2xl font-bold  text-red-500">00 01 55</div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <div className="px-2">HOURS</div>
          <div className="px-2">MIN</div>
          <div className="px-2">SEC</div>
        </div>
      </div>
    </div>
    <div >Prize: ₹0 | 9-July</div>
  </div>
</div>

    {/* Tickets Component */}
      <Tickets />
      {/* Tickets Component */}

      <div className="flex justify-center mt-10 gap-9">
        <div>
          <button className="border w-36 h-10 rounded-lg bg-blue-950 text-white">
            ADD To Cart
          </button>
        </div>
        <div>
          <button className="border w-36 h-10 rounded-lg bg-blue-950 text-white">
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EntryPage;
