// import { Collapse } from "bootstrap";
import React from "react";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import batting from "../../Media/batting.png";
import bowling from "../../Media/bowling.png";

const ScoreCard = () => {
  return (
    <div className="">
      <div className="match-score-section mt-2 d-flex flex-column align-items-center justify-content-center">
        <div className="mt-2 match-name-div d-flex justify-content-center ">
          <button className="match-name-btn">Test Match</button>
          
          <div>
          {/* <hr className="orange-line" /> */}
            </div>
          {/* <div className="orange-line">jkjbu</div> */}
        </div>
        
        <div className="mt-1">
          <p className="mn">
            NEW ZEELAND <span className="vs">vs</span> SOUTH AFRICA
          </p>
        </div>
        <div className="in-play-main-div d-flex ">
          <button className="blue-btn">
            <MdOutlineStackedLineChart />
          </button>
          <p className="inplay-w px-3 text-center d-flex align-items-center pt-1">IN<span>-</span>PLAY</p>
          <button className="blue-btn">
            <MdOutlineOndemandVideo />
          </button>
        </div>
        <div className="main-score-card-div bg-black">
          <div className="row">
            <div className="col-5 ">
              <div className="row">
                <div className="col-3  p-2  ">
                  <div className="batting-icon d-flex justify-content-center align-items-center ms-1">
                    <img className="bat-icon-img" src={batting} alt="." />
                  </div>
                </div>
                <div className="col-2  d-flex justify-content-center ">
                  <p className="team-a-name mt-3">NZ</p>
                </div>
                <div className="col-7 d-flex flex-column justify-content-center align-items-center ">
                  <p className="team-a-name mb-0">179-4</p>
                  <p className="A-team-score mt-0 ">43.0 OV & 511-10(144.0)</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <button className="stumps mt-3">Stumps</button>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-7 d-flex flex-column justify-content-center align-items-center  ">
                  <p className="team-a-name mb-0">179-4</p>
                  <p className="A-team-score mt-0">43.0 OV & 511-10(144.0)</p>
                </div>
                <div className="col-2  d-flex justify-content-center  ">
                  <p className="team-a-name mt-3">NZ</p>
                </div>

                <div className="col-3  p-2  ">
                  <div className="batting-icon d-flex justify-content-center align-items-center ms-1">
                    <img className="bat-icon-img" src={bowling} alt="." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-5 batter-info d-flex flex-column justify-content-center align-items-center mt-2 ">
                  <p className="mb-0">batsmen</p>
                  <p className="mb-0">Darryel Mitchel</p>
                  <p className="mb-0">Tom Blundel</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">RB</p>
                  <p className="mb-0">10</p>
                  <p className="mb-0">10</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">4s</p>
                  <p className="mb-0">2</p>
                  <p className="mb-0">4</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">6s</p>
                  <p className="mb-0">-</p>
                  <p className="mb-0">-</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2"></div>
                <div className="col-3 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">Strike Rate</p>
                  <p className="mb-0">-</p>
                  <p className="mb-0">-</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center  ">
              <div className=" over-ball-div d-lg-block d-none ">
                <div className=" mx-2 d-flex justify-content-between align-items-center mt-3">
                  <div className="single-info">1</div>
                  <div className="no-run-info">0</div>
                  <div className="four-info">4</div>
                  <div className="single-info">1</div>
                  <div className="four-info">4</div>
                  <div className="six-info">6</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-5 batter-info d-flex flex-column justify-content-center align-items-center mt-2 ">
                  <p className="mb-0">batsmen</p>
                  <p className="mb-0">Darryel Mitchel</p>
                  <p className="mb-0">Tom Blundel</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">RB</p>
                  <p className="mb-0">10</p>
                  <p className="mb-0">10</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">4s</p>
                  <p className="mb-0">2</p>
                  <p className="mb-0">4</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">6s</p>
                  <p className="mb-0">-</p>
                  <p className="mb-0">-</p>
                </div>
                <div className="col-1 batter-info d-flex flex-column justify-content-center align-items-center mt-2"></div>
                <div className="col-3 batter-info d-flex flex-column justify-content-center align-items-center mt-2">
                  <p className="mb-0">Strike Rate</p>
                  <p className="mb-0">-</p>
                  <p className="mb-0">-</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lead d-flex justify-content-center">
            <p>India Lead by 46</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
