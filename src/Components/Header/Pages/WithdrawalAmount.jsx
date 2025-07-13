import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy} from "@fortawesome/free-solid-svg-icons";
import CustomModal from "./CustomModal";
import refresh from "../../../assets/Group 167.png";
import edit from "../../../assets/icons_edit_icon 1.png";

const WithdrawalAmount = () => {
  const initialText = "Balance";
  const [balanceAmount, setBalanceAmount] = useState("₹ 5742.60");

  const handleRefreshClick = () => {
    setBalanceAmount(getRandomNumber());
  };

  const getRandomNumber = () => {
    const randomNumber = (Math.random() * (10000 - 1000) + 1000).toFixed(2);
    return `₹ ${randomNumber}`;
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const [accountDetails, setAccountDetails] = useState({
    accountName: "Priya",
    accountNumber: "12345",
    bankName: "SBI",
    ifsc: "ifsc123",
    whatsappNumber: "9912345678",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdate = (updatedDetails) => {
    setAccountDetails(updatedDetails);
  };

  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    setCopiedText(text);
    alert("Copied successfully");
  };

  return (
    <div className="mt-10">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="relative w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mb-4 bg-white rounded-2xl leading-4 shadow-md text-white pl-6 md:pl-12 py-2 flex items-center">
          <div className="mt-2 md:mt-4">
            <p className="text-[#1D3C67]">{initialText}</p>
            <p className="text-md md:text-lg text-[#1D3C67] flex items-center">
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

      <div className="w-full flex justify-center">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex-col items-center justify-center shadow-md rounded-lg bg-white p-2 md:p-4">
          <div className="w-full rounded-lg p-2 md:p-4 flex justify-between">
            <p>Transfer To Bank Account</p>
            <img
              src={edit}
              alt="edit"
              className="w-6 cursor-pointer"
              onClick={openModal}
            />
          </div>
          <div className="flex items-center py-2">
            <div className="border w-full rounded-lg item-center bg-[#EBEDF1] p-4 space-y-2">
              <div className="flex justify-between items-center">
                <p>Account Name: {accountDetails.accountName}</p>
                <CopyToClipboard
                  text={accountDetails.accountName}
                  onCopy={() => handleCopy(accountDetails.accountName)}
                >
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between items-center">
                <p>Account Number: {accountDetails.accountNumber}</p>
                <CopyToClipboard
                  text={accountDetails.accountNumber}
                  onCopy={() => handleCopy(accountDetails.accountNumber)}
                >
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between items-center">
                <p>Bank Name: {accountDetails.bankName}</p>
                <CopyToClipboard
                  text={accountDetails.bankName}
                  onCopy={() => handleCopy(accountDetails.bankName)}
                >
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between items-center">
                <p>IFSC: {accountDetails.ifsc}</p>
                <CopyToClipboard
                  text={accountDetails.ifsc}
                  onCopy={() => handleCopy(accountDetails.ifsc)}
                >
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between items-center">
                <p>WhatsApp Mobile Number: {accountDetails.whatsappNumber}</p>
                <CopyToClipboard
                  text={accountDetails.whatsappNumber}
                  onCopy={() => handleCopy(accountDetails.whatsappNumber)}
                >
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        accountDetails={accountDetails}
        onUpdate={handleUpdate}
      />

      <div className="w-full flex justify-center mt-10">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex-col items-center justify-center shadow-md rounded-lg bg-white p-2 md:p-4">
          <div className="ml-3 text-lg mt-3">Amount</div>
          <div className="w-full rounded-2xl p-2 md:p-4 bg-[#EBEDF1] mt-4">
            <input
              type="number"
              className="bg-[#EBEDF1] text-md outline-none w-full p-2"
            />
          </div>
          <div className="">
            <div className="items-center py-2 mt-10 p-10 text-[#1D3C67]">
              <p>
                *Note : We Process Withdrawals in 2 time slots. 11 AM and 11 PM
                IST.
              </p>
              <p>
                Your Withdrawal will be processed within 12 hours after request.
              </p>
              <p>
                In case of withdrawal is delayed or cancelled due to banking
                issues, the withdrawn amount will be returned to your wallet.
                Thank you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <button className="w-10/12 md:w-8/12 lg:w-6/12 text-lg xl:w-4/12 h-16 md:h-24 bg-[#1D3C67] rounded-2xl leading-4 shadow-md text-white mt-4 mb-7">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default WithdrawalAmount;
