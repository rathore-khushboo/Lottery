import React, { useState } from "react";
import ReactModal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose, accountDetails, onUpdate }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "600px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  const [details, setDetails] = useState(accountDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(details);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Edit Account Details"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Edit Account Details</h2>
        <button onClick={onRequestClose} className="text-lg font-bold">
          &times;
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Account Name:</label>
          <input
            type="text"
            name="accountName"
            value={details.accountName}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={details.accountNumber}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={details.bankName}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">IFSC:</label>
          <input
            type="text"
            name="ifsc"
            value={details.ifsc}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">WhatsApp Mobile Number:</label>
          <input
            type="text"
            name="whatsappNumber"
            value={details.whatsappNumber}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="mt-4 w-full bg-[#1D3C67] text-white py-2 rounded-md"
        >
          Update
        </button>
      </form>
    </ReactModal>
  );
};

export default CustomModal;
