import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Tickets = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [additionalTickets, setAdditionalTickets] = useState([]);

  const maxSelection = 3;
  const ticketPrice = 25;

  const handleClick = (number) => {
    if (selectedNumbers.includes()) {
      return;
    }
    if (selectedNumbers.length === maxSelection) {
      return;
    }

    setSelectedNumbers([...selectedNumbers, number]);
  };

  const handleDelete = () => {
    setSelectedNumbers([]);
  };

  const handleDeleteTicket = (ticketIndex) => {
    setAdditionalTickets(
      additionalTickets.filter((_, index) => index !== ticketIndex)
    );
  };

  const handleAddTicket = () => {
    if (selectedNumbers.length < 3) {
      alert("Please select 3 numbers before adding another ticket.");
      return;
    }
    setAdditionalTickets([...additionalTickets, selectedNumbers]);
    setSelectedNumbers([]);
  };

  const handleQuickPick = () => {
    const randomNumbers = Array.from({ length: maxSelection }, () =>
      Math.floor(Math.random() * 10)
    );
    setSelectedNumbers(randomNumbers);
  };

  const totalAmount = additionalTickets.length * ticketPrice;

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="relative w-96 h-96 bg-red-500 rounded-lg shadow-lg p-4">
          <button
            className="absolute top-0 right-0 m-2 p-2 bg-white text-red-500 border border-red-500 rounded-full"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>

          {selectedNumbers.length > 0 && (
            <div className="flex justify-center mb-4">
              {selectedNumbers.map((number, index) => (
                <div
                  key={index}
                  className="bg-white text-red-500 border border-red-500 rounded-lg px-3 py-1 flex items-center justify-center mr-2"
                >
                  {number}
                </div>
              ))}
            </div>
          )}
          <hr className="mt-7" />

          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  key={number}
                  className="w-16 h-16 bg-white text-red-500 border border-red-500 rounded-lg flex items-center justify-center"
                  onClick={() => handleClick(number)}
                >
                  {number}
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              {[6, 7, 8, 9, 0].map((number) => (
                <button
                  key={number}
                  className="w-16 h-16 bg-white text-red-500 border border-red-500 rounded-lg flex items-center justify-center"
                  onClick={() => handleClick(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              className="px-4 py-2 bg-white text-red-500 border border-red-500 rounded-lg"
              onClick={handleQuickPick}
            >
              Quick Pick
            </button>
            <button
              className="px-4 py-2 bg-white text-red-500 border border-red-500 rounded-lg"
              onClick={handleAddTicket} 
            >
              Add Another Ticket
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white">
              Pick a 3-Digit Number from 000 to 999 and Win Big
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 text-2xl font-bold">
        Total: ₹{totalAmount}
      </div>
      {additionalTickets.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
          {additionalTickets.map((ticket, ticketIndex) => (
            <div key={ticketIndex} className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500 font-bold">Ticket {ticketIndex + 1}</span>
                <button
                  className="ml-2 bg-white text-black"
                  onClick={() => handleDeleteTicket(ticketIndex)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
              <div className="flex justify-center">
                {ticket.map((number, index) => (
                  <div
                    key={`${index}`}
                    className="text-white bg-red-600 border border-red-500 rounded-lg px-3 py-1 flex items-center justify-center mr-2"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tickets;
