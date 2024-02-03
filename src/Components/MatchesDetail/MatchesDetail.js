import React from "react";
import SliderH from "./SliderH";
import "./MatchesDetail.css";
import cricket from "../../Media/5.png";
import tennis from "../../Media/4.png";
import football from "../../Media/6.png";

const MainArea = () => {
  return (
    <div className="col-lg-7 p-2">
      <SliderH />
      <div className="MainArea ">
        <div className="sport-div bg-dark row">
          <div className="single-sport-div">
            <div className="row">
              <div className="col-10 d-flex flex-column justify-content-center align-items-center ">
                <div className=" round-sport-div d-flex justify-content-center align-items-center ms-1 mt-2">
                  <img
                    className=" sport-img ms-1"
                    src={cricket}
                    alt="cricket"
                  />
                </div>
                <p className="ms-1">CRICKET</p>
              </div>
              <div className="col-2">
                <div className="num-div d-flex justify-content-center">
                  <p className="">13</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-sport-div">
            <div className="row">
              <div className="col-10 d-flex flex-column justify-content-center align-items-center ">
                <div className=" round-sport-div d-flex justify-content-center align-items-center ms-1 mt-2">
                  <img className=" sport-img " src={football} alt="cricket" />
                </div>
                <p className="ms-1">SOCCER</p>
              </div>
              <div className="col-2">
                <div className="num-div d-flex justify-content-center">
                  <p className="">13</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-sport-div">
            <div className="row">
              <div className="col-10 d-flex flex-column justify-content-center align-items-center ">
                <div className=" round-sport-div d-flex justify-content-center align-items-center ms-1 mt-2">
                  <img className=" sport-img ms-1" src={tennis} alt="cricket" />
                </div>
                <p className="ms-1">TENNIS</p>
              </div>
              <div className="col-2">
                <div className="num-div d-flex justify-content-center">
                  <p className="">13</p>
                </div>
              </div>
            </div>
          </div>
          {/* <----------------------MatchData-----------------------> */}
          <div className="row match-div">
            <div className="col-2 ">
              <div className="schedule-btn ms-2 mt-2 pt-2 d-flex flex-column justify-content-center align-items-center">
                Tommorow
                <p>4:14 PM</p>
              </div>
            </div>
            <div className="col-5  ">
              <h6 className="match-name mt-2 mb-0">
                ENGLAND U19 <span className="vs">V</span> ZImbabwew U19
              </h6>
              <span className="tournamnet-name mt-0">ICC U19 Worldcup</span>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-4">
                  <div className="mt-3">
                    <button className="blue-btn ">10</button>
                    <button className=" ms-2 orange-btn">10</button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mt-3">
                    <button className="blue-btn ">10</button>
                    <button className=" ms-2 orange-btn">10</button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mt-3">
                    <button className="blue-btn ">10</button>
                    <button className=" ms-2 orange-btn">10</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
