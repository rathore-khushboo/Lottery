import React from "react";
import Card from "react-bootstrap/Card";
import image from "../../../assets/image 6 (1).png";
import group from "../../../assets/Group 101.svg";

const Third = () => {
  return (
    <div>
      <h1 className="text-center mt-4 text-gray-400">-- TOP WINNERS --</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {[1, 2, 3].map((_, idx) => (
          <Card style={{ width: "22rem", margin: "1rem" }} key={idx}>
            <Card.Body className="bg-yellow-500">
              <Card.Title className="position-relative text-md mb-3 text-sm text-center">
                Winning Numbers
              </Card.Title>
              <div className="flex items-center justify-center mb-3">
                <div>
                  <img src={group} alt="" />
                </div>
                <div className="flex items-center justify-center mx-3 space-x-2">
                  <div className="bg-white p-2 rounded">4</div>
                  <div className="bg-white p-2 rounded">7</div>
                  <div className="bg-white p-2 rounded">3</div>
                </div>
                <div>
                  <img src={image} alt="logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <button className="border h-16 w-40 flex flex-col items-center justify-center">
                  <div>Get Amount</div>
                  <div className="flex justify-center">₹800</div>
                </button>
              </div>
              <div className="flex text-xs mt-3 justify-around">
                <div>
                  Draw ID <div className="text-center">#LOTWGNZ111</div>
                </div>
                <div>
                  Current Prize Pool <div className="text-center">₹350</div>
                </div>
                <div>
                  Draw Date <div className="text-center">18 JAN 2024</div>
                </div>
                <div>
                  Draw Time <div className="text-center">10.50 pm</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Third;
