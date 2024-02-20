import React from "react";
import RightSidebar from "../RightSidebar/RIghtSidebar";
import "./ThirtyTwoCards.css";
import a from "../../Media/10SS.png";
import b from "../../Media/3SS.png";
import c from "../../Media/2HH.png";
import d from "../../Media/AHH.png";
import e from "../../Media/KHH.png";
import { MdCancel } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { useState } from "react";

const ThirtyTwoCards = () => {
  const [showresultModal, setShowresultModal] = useState(false);
  const [showDataModal, setShowdataModal] = useState(false);
  const DataModal = () => {
    return (
      <>
        <div
          onClick={() => {
            setShowdataModal(false);
          }}
          className="data-modal-wrapper"
        ></div>
        <div className="data-modal-container">
          <div className="head-border d-flex align-items-center">
            <p className="my-auto mx-2">32 Cards</p>
          </div>
          <div className="container-body">
            <p className="my-1 mx-2">Player 9</p>
            <div className="row">
              <div className="col-4">
                <p className="mx-2 ">Odds</p>
              </div>
              <div className="col-8">
                <button className="modal-w-btn">19.5</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="mx-2 ">Stake</p>
              </div>
              <div className="col-8">
                <button className="modal-w-btn">2</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="mx-2 ">Profit</p>
              </div>
              <div className="col-8">
                <button className="modal-g-btn">19.5</button>
              </div>
            </div>
            <div className="orange-buttons-row d-flex flex-wrap">
                <button className="orb mx-1 my-1">
                    5

                </button>
                <button className="orb mx-1 my-1">
                    10

                </button>
                <button className="orb mx-1 my-1  ">
                    20

                </button>
                <button className="orb mx-1 my-1">
                    50

                </button>
                <button className="orb mx-1 my-1">
                    100

                </button>
                <button className="orb mx-1 my-1">
                    200

                </button>
                <button className="orb mx-1 my-1">
                    500

                </button> 
                <button className="orb mx-1 my-1">
                    1000

                </button>
                
                

            </div>
            
          </div>
          <div className="modal-footer row mt-1">
            <div className="col-5" >

            </div>
            <div className="col-7 py-2">
                <button onClick={()=>{setShowdataModal(false)}} className="mcb ">
                    Cancel
                </button>
                <button className="mbb mx-1">Place Bet</button>

            </div>


          </div>
        </div>
      </>
    );
  };
  const ResultsModal = () => {
    return (
      <>
        <div
          onClick={() => {
            setShowresultModal(false);
          }}
          className="Results-modal-wrapper"
        ></div>
        <div className="results-modal-container bg-dark">
          <div className="results-modal-h d-flex justify-content-between pt-2">
            <div>Round ID: 24200216501</div>
            <MdCancel
              className="cross-icon-result me-2"
              onClick={() => {
                setShowresultModal(false);
              }}
            />
          </div>
          <div>
            <div className="d-flex justify-content-center mt-2">
              <div className="player-a-div ">
                <div className="text-center">Player 8:27</div>
                <div className="d-flex">
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={a} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div className="player-a-div  ">
                <div className="d-flex justify-content-between">
                  <div className="text-center">Player 9: 18</div>
                  <FaTrophy className="trophy-icon" />
                </div>

                <div className="d-flex">
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={a} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div className="player-a-div ">
                <div className="text-center">Player 10:20</div>
                <div className="d-flex">
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={a} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div className="player-a-div ">
                <div className="text-center">Player 11:29</div>
                <div className="d-flex">
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={a} className="img-fluid" alt="a" />
                  </div>
                  <div className="gamecard-div mx-1">
                    <img src={b} className="img-fluid" alt="a" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="col-lg-10 ">
      <div className="row home ">
        <div className="col-lg-8 p-1">
          <div className="teenpatti-game-div pt-2 p-2">
            <div className="teenpatti-game-h d-flex justify-content-between  ">
              <div className=" px-2">
                <p className=" mt-1 ">Card 2020</p>
              </div>
              <div>
                <p className="mt-1 px-2">
                  Round ID: 2024021633648 | Left Time: 56 | Rules
                </p>
              </div>
            </div>
            <div className="card  teenpatti-game-card p-1 mt-1">
              <div className="row">
                <div className="col-10">
                  <div className="player-a-div">
                    <div>
                      Player 8 :{" "}
                      <span className="orange-circle px-1 "> 19 </span>
                    </div>
                    <div className="gamecard-div mx-1">
                      <img src={c} className="img-fluid" alt="a" />
                    </div>
                  </div>
                  <div className="player-a-div">
                    <div>
                      Player 8 :{" "}
                      <span className="orange-circle px-1 "> 19 </span>
                    </div>
                    <div className="gamecard-div mx-1">
                      <img src={c} className="img-fluid" alt="a" />
                    </div>
                  </div>
                  <div className="player-a-div">
                    <div>
                      Player 8 :{" "}
                      <span className="orange-circle px-1 "> 19 </span>
                    </div>
                    <div className="gamecard-div mx-1">
                      <img src={c} className="img-fluid" alt="a" />
                    </div>
                  </div>
                  <div className="player-a-div">
                    <div>
                      Player 8 :{" "}
                      <span className="orange-circle px-1 "> 19 </span>
                    </div>
                    <div className="gamecard-div mx-1">
                      <img src={c} className="img-fluid" alt="a" />
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-end">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* <-------------------------------Back-lay-table----------> */}
            <div>
              <div className="table-h-div row">
                <div className="col-5 d-flex align-items-center ps-2"></div>
                <div className="col-2 d-flex align-items-center justify-content-center px-2">
                  Back
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center ">
                  Lay
                </div>
              </div>
              <div className="card-table-inner-row row">
                <div className="col-5 d-flex align-items-center ps-2">
                  PLAYER A <span className="success-o ms-1"> 0</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center px-2">
                  <button  onClick={() => {
                      setShowdataModal(true);
                    }} className="back-btn">Suspended</button>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center ">
                  <button className="lay-btn">Suspended</button>
                </div>
              </div>
              <div className="card-table-inner-row row">
                <div className="col-5 d-flex align-items-center ps-2">
                  PLAYER A <span className="success-o ms-1"> 0</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center px-2">
                  <button
                    onClick={() => {
                      setShowdataModal(true);
                    }}
                    className="back-btn"
                  >
                    Suspended
                  </button>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center ">
                  <button className="lay-btn">Suspended</button>
                </div>
              </div>
              <div className="card-table-inner-row row">
                <div className="col-5 d-flex align-items-center ps-2">
                  PLAYER A <span className="success-o ms-1"> 0</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center px-2">
                  <button className="back-btn">Suspended</button>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center ">
                  <button className="lay-btn">Suspended</button>
                </div>
              </div>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<<<-----------------------My-Bets-table-------------->>>>>>>>>> */}
            <div className="My-Bets-table">
              <div className="color-game-h mt-2">
                <div className="px-2 pt-1">
                  <p>Open Bets</p>
                </div>
              </div>
              <div className="card-table-inner-row row"></div>
            </div>
            <div className="Results-table">
              <div className="color-game-h mt-2">
                <div className="px-2 pt-1">
                  <p>Last 10 Results</p>
                </div>
              </div>
              <div className="card rst-card py-1 d-flex">
                <div className="rst-row d-flex">
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    B
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    A
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    A
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    B
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    A
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    B
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    A
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    B
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    A
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    B
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightSidebar />
        {showresultModal && <ResultsModal />}
        {showDataModal && <DataModal />}
      </div>
    </div>
  );
};

export default ThirtyTwoCards;
