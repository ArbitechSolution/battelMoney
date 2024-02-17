import React, { useState, useEffect } from "react";
import RightSidebar from "../RightSidebar/RIghtSidebar";
import SliderH from "../MatchesDetail/SliderH";
import colorimg from "../../Media/output-onlinepngtools (8).png";
import aircraft from "../../Media/output-onlinepngtools (5).png";
import { NavLink } from "react-router-dom";

// import "./MatchesDetail.css";
import cricket from "../../Media/5.png";

import tennis from "../../Media/4.png";
import football from "../../Media/6.png";
import InPlayMatchData from "../MatchesDetail/InPlayMatchData";

const InPlay = () => {
  const [active, setActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Toggle the visibility of the image every second
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="col-lg-10 home">
      <div className="row home ">
        <div className=" col-lg-8 p-2 center-div">
          <SliderH />
          <div className="MainArea ">
            <div className="sport-div bg-dark row">
              <div
                onClick={() => {
                  setActive(true);
                }}
                className={`single-sport-div ${active && "is-active"}`}
              >
                <div className="row">
                  <div className="col-10 d-flex flex-column justify-content-end align-items-center ">
                    <div
                      className={`round-sport-div d-flex justify-content-center align-items-center ms-1 mt-2 ${
                        active && "is-activ"
                      }`}
                    >
                      <img
                        className=" sport-img ms-1"
                        src={cricket}
                        alt="cricket"
                      />
                    </div>
                    <p className={`ms-1 sport-name mt-1 ${active && "is-act"}`}>
                      CRICKET
                    </p>
                  </div>
                  <div className="col-2 ">
                    <div className="num-div d-flex justify-content-center ">
                      13
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-sport-div">
                <div className="row">
                  <div className="col-10 d-flex flex-column justify-content-end align-items-center ">
                    <div className=" round-sport-div d-flex justify-content-center align-items-center  mt-2">
                      <img
                        className=" sport-img "
                        src={football}
                        alt="cricket"
                      />
                    </div>
                    <p className="ms-1 sport-name mt-1">SOCCER</p>
                  </div>
                  <div className="col-2">
                    <div className="num-div d-flex justify-content-center">
                      13
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-sport-div">
                <div className="row">
                  <div className="col-10 d-flex flex-column justify-content-center align-items-center ">
                    <div className=" round-sport-div d-flex justify-content-center align-items-center ms-1 mt-2">
                      <img
                        className=" sport-img ms-1"
                        src={tennis}
                        alt="cricket"
                      />
                    </div>
                    <p className="ms-1 mt-1 sport-name">TENNIS</p>
                  </div>
                  <div className="col-2">
                    <div className="num-div d-flex justify-content-center align-items-center">
                      13
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-sport-div ms-4">
            <NavLink to="/ColorGame" className="nav-link">
              <div className="blink-img-div">
                {isVisible && (
                  <img
                    className="image-size img-fluid "
                    src={colorimg}
                    alt="a"
                  />
                )}
              </div>
              <p className="ms-1  sport-name">COLOR</p>
            </NavLink>
          </div>
          <div className="single-sport-div ms-1">
            <NavLink to="/Aviator" className="nav-link">
              <div className="image-div">
                {isVisible && (
                  <img
                    className=" a-image-size img-fluid mt-2"
                    src={aircraft}
                    alt="a"
                  />
                )}
              </div>
              <p className="ms-1 mt-1 sport-name mt-3">AVIATOR</p>
            </NavLink>
          </div>
              {/* <----------------------MatchData-----------------------> */}
              {/* <MatchData/> */}

              <InPlayMatchData />
              <InPlayMatchData />
              <InPlayMatchData />
              <InPlayMatchData />

              {/* <MatchData/> */}
              {/* <MatchData/> */}
              {/* <MatchData/> */}
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default InPlay;
