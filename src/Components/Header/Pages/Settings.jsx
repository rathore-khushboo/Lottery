import React from 'react';
import miDelete from "../../../assets/mi_delete.png";
import key from "../../../assets/fluent-emoji_key.png"
import bank from "../../../assets/bank_account 1.png"
import vector from "../../../assets/Vector 40.png"

const Settings = () => {
  return (
    <div className='bg-white min-h-screen'>
      <div className="w-full bg-custom-red pt-7 text-2xl text-center h-20 text-white">
        Settings
      </div>
      <div className="max-w-md mx-auto p-4 mt-10 space-y-4">
       
        <div className="flex items-center justify-between p-4 rounded-lg hover:shadow-md cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <img src={bank} alt='' className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Bank Details</h2>
              <p className="text-sm text-gray-500">Your bank details</p>
            </div>
          </div>
          <img src={vector} alt=''/>
        </div>

       
        <div className="flex items-center justify-between p-4 rounded-lg hover:shadow-md cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <img src={key} alt='' className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Change Password</h2>
              <p className="text-sm text-gray-500">Change Your Password</p>
            </div>
          </div>
          <img src={vector} alt=''  />
        </div>

       
        <div className="flex items-center justify-between p-4 rounded-lg hover:shadow-md cursor-pointer">
          <div className="flex items-center space-x-4 mb-7">
            <div className="bg-orange-100 p-2 rounded-full">
             <img src={miDelete} alt='' className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Delete Account</h2>
              <p className="text-sm text-gray-500">Delete Your Account</p>
            </div>
          </div>
          <img src={vector} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Settings;
