import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Begin Your Journey with Homyz</span>
          <span className="secondaryText">
          Subscribe for Exclusive Price Offers 
            <br />
            Find Your Home Now!
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
