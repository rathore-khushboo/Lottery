import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import drawIcon from "../../../assets/4DrawIcon.png";
import groupIcon from "../../../assets/Group 101.svg";
import guaranteedIcon from "../../../assets/guranteed tag 3num.png";

const Second = () => {
  const upcomingDraws = [
    {
      image: drawIcon,
      altText: "draw logo",
      guaranteedImage: guaranteedIcon,
      prize: "₹500000",
      pricePool: "₹200",
      description: "Pick 4 Digit Number From 0000 to 9999 and Win Big",
      timeLeft: "0h 3m 5s",
      entryDetails: {
        entryText: "Entry ₹50",
        buttonColor: "border-blue-500 text-blue-500",
      },
    },
    {
      image: groupIcon,
      altText: "group icon",
      guaranteedImage: guaranteedIcon,
      prize: "₹500000",
      pricePool: "₹200",
      description: "Pick 3 Digit Number From 000 To 999 Win Big",
      timeLeft: "0h 3m 5s",
      entryDetails: {
        entryText: "Entry ₹25",
        buttonColor: "border-red-500 text-red-500",
      },
    },
    {
      image: drawIcon,
      altText: "draw logo",
      guaranteedImage: guaranteedIcon,
      prize: "₹500000",
      pricePool: "₹200",
      description: "Pick 4 Digit Number From 0000 to 9999 and Win Big",
      timeLeft: "0h 8m 5s",
      entryDetails: {
        entryText: "Entry ₹50",
        buttonColor: "border-blue-500 text-blue-500",
      },
    },
  ];

  return (
    <div>
      <h1 className="text-center text-gray-500">-- UPCOMING DRAW --</h1>
      <div className="flex flex-wrap justify-center">
        {upcomingDraws.map((draw, idx) => (
          <Card
            className="m-4 shadow-lg relative"
            key={idx}
            style={{ width: "18rem" }}
          >
            <div className="relative">
              <Card.Img
                src={draw.image}
                alt={draw.altText}
                className="mx-auto mt-4"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <span className="absolute top-0 left-0 m-2 bg-white p-1 rounded text-gray-700 font-semibold">
                <div className="mt-6">{draw.prize}</div>
                <div>Prize</div>
              </span>
              <span className="absolute top-0 right-0 m-2 bg-white p-1 rounded text-gray-700 font-semibold">
                <div className="mt-6">{draw.pricePool}</div>
                <div>Price Pool</div>
              </span>
            </div>
            <Card.Body>
              <Card.Text className="text-center text-gray-600">
                {draw.description}
              </Card.Text>
              <Card.Text className="text-center text-xl font-bold text-gray-800">
                {draw.timeLeft}
              </Card.Text>
              <div className="text-center">
                <Button
                  className={`px-4 py-2 rounded-full ${draw.entryDetails.buttonColor} `}
                >
                  {draw.entryDetails.entryText}
                </Button>
              </div>
              <div className="flex justify-center mt-3">Number of Entry 0</div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Second;
