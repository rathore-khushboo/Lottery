import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className=" text-black py-4 sm:py-6 mb-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 pb-4">
          <div>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 font-bold text-sm sm:text-base">
            <li>Home</li>
            <li>|</li>
            <li>Play Now</li>
            <li>|</li>
            <li>How To Play</li>
            <li>|</li>
            <li>FAQs</li>
            <li>|</li>
            <li>Contact Us</li>
            <li>|</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex justify-center pb-2">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 font-bold text-sm sm:text-base">
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Legal</li>
            <li>|</li>
            <li>Game Rules</li>
            <li>|</li>
            <li>Terms and Conditions</li>
            <li>|</li>
            <li>Participate Responsibly</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs">
        Copyright © 2023. All Rights Reserved By Lottri
      </div>
    </footer>
  );
};

export default Footer;
