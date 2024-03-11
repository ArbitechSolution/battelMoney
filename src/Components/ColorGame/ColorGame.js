import React, { useState, useEffect } from "react";
import RightSidebar from "../RightSidebar/RIghtSidebar";
import "./ColorGame.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBetHistory } from '../../Redux/Slices/colorsbetSlice';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { placeBetColorBallData } from '../../Redux/Slices/placeColorBetSlice';

const ColorGame = () => {
  const [count,setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState();
  const [twoActive, setTwoActive] = useState(false);
  const [fiveActive, setFiveActive] = useState(false);
  const [tenActive, setTenActive] = useState(false);
  const [twentyActive, setTwentyActive] = useState(false);
  const [fiftyActive, setFiftyActive] = useState(false);
  const [hundActive, setHundActive] = useState(false);
  const dispatch = useDispatch();
  const [roundId, setRoundId] = useState('2');
  // const [uid, setUid] = useState('778899');
  const [ball, setBall] = useState('');
  const [color, setColor] = useState('');
  const [stake, setStake] = useState('');
  const { isSuccess, isLoading, error } = useSelector((state) => state.placeBet);
  const token = sessionStorage.getItem("token");
  console.log(token);

  const uid = sessionStorage.getItem("userData"); 
  console.log(uid)
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const data = {
      roundid: '2',
      uid: uid,
      ball: '3',
      color: 'Green',
      stake: '1000',
    };

    try {
      await dispatch(placeBetColorBallData({ data, token }));
      console.log("token after", token)
    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };
 
  // const userdata = sessionStorage.getItem("userdata");
  
  if(isSuccess){
    console.log("responce of bet", isSuccess)
  }
  if(isLoading){
    console.log("loading",isLoading)
  }
  if(error)
  {
    console.log(error)
  }
  const ShowModal = () => {
    return (
      <>
        <div
          onClick={() => {
            setModal(false);
            setBall("");
            setColor("");
          }}
          className="color-modal-wrapper"
        ></div>
        <div className="color-modal-container card">
          <div className="model-h-dive  d-flex justify-content-between ">
            <div className="px-2 p-1">{color ? <spna>{color}</spna> : <span>{ball}</span> }</div>
            <div className="px-2 p-1">Time Left 20</div>
          </div>
          <div className="p-2">
            <p className="mb-0 pb-0 contract-money">Contract Money</p>
            <div className="boxes-div d-flex">
              <button onClick={() => {
                  setTwoActive(true);
                  setFiftyActive(false);
                  setFiveActive(false);
                  setTenActive(false);
                  setTwentyActive(false);
                  setHundActive(false);
                }} className={`num-box d-flex justify-content-center align-items-center ${
                  twoActive && "is-activated"
                } `}>
                2
              </button>
              <button
                onClick={() => {
                  setTwoActive(false);
                  setFiftyActive(false);
                  setFiveActive(true);
                  setTenActive(false);
                  setTwentyActive(false);
                  setHundActive(false);
                }}
                className={`num-box d-flex justify-content-center align-items-center ${
                  fiveActive && "is-activated"
                } `}
              >
                5
              </button>
              <button onClick={() => {
                  setTwoActive(false);
                  setFiftyActive(false);
                  setFiveActive(false);
                  setTenActive(true);
                  setTwentyActive(false);
                  setHundActive(false);
                }} className={`num-box d-flex justify-content-center align-items-center ${
                    tenActive && "is-activated"
                  } `}>
                10
              </button>
              <button onClick={() => {
                  setTwoActive(false);
                  setFiftyActive(false);
                  setFiveActive(false);
                  setTenActive(false);
                  setTwentyActive(true);
                  setHundActive(false);
                }}  className={`num-box d-flex justify-content-center align-items-center ${
                    twentyActive && "is-activated"
                  } `}>
                20
              </button>
              <button onClick={() => {
                  setTwoActive(false);
                  setFiftyActive(true);
                  setFiveActive(false);
                  setTenActive(false);
                  setTwentyActive(false);
                  setHundActive(false);
                }}  className={`num-box d-flex justify-content-center align-items-center ${
                    fiftyActive && "is-activated"
                  } `}>
                50
              </button>
              <button onClick={() => {
                  setTwoActive(false);
                  setFiftyActive(false);
                  setFiveActive(false);
                  setTenActive(false);
                  setTwentyActive(false);
                  setHundActive(true);
                }}  className={`num-box d-flex justify-content-center align-items-center ${
                    hundActive && "is-activated"
                  } `}>
                100
              </button>
            </div>
            <div className=" p-2 mt-2">
            <p className="mb-0 pb-0 contract-money">Number</p>
              <div className="main-counter-div mt-1 d-flex">
                <button onClick={()=>{setCount(count-1)}} className="minus-div d-flex justify-content-center align-items-center">
                  -

                </button>
                <div className="counter-data-div d-flex justify-content-center align-items-center ">
                  {
                    count
                  }

                </div>
                <button onClick={()=>{setCount(count+1)}}className="plus-div d-flex justify-content-center align-items-center">
                  +

                </button>


              </div>

            </div>
            <div className="mt-2">
            <p className="mb-0 pb-0 contract-money"> Total Contract Money</p>

            </div>
            <div className="d-flex justify-content-center  ">

              <button  onClick={() => {
            setModal(false);
            setBall("");
            setColor("");
          }} className="red-modal-btn">
                Close

              </button>
              <button  onClick={handleSubmit} className="green-modal-btn">
                 Place Bets
              </button>

            </div>
            <div className="p-1 alert-s-rem">
              Bet Slip Will Close in 18 Seconds

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
          <div className="color-game-div pt-2 p-2">
            <div className="color-game-h d-flex justify-content-between  ">
              <div className=" px-2">
                <p className=" mt-1 ">Color Game</p>
              </div>
              <div>
                <p className="mt-1 px-2">
                  Round ID: 2024021633648 | Left Time: 56 | Rules
                </p>
              </div>
            </div>
            <div className="card  color-game-card">
              <div className="row mt-4">
                <div className="col-4">
                  <button
                    onClick={() => {
                      setModal(true);
                      setColor("green")
                      
                    }}
                    className="Green-button"
                  >
                    GREEN
                  </button>
                </div>
                <div className="col-4">
                  <button onClick={() => {
                      setModal(true);
                      setColor("violet")
                      
                    }} className="violet-button">VIOLET</button>
                </div>
                <div className="col-4">
                  <button onClick={() => {
                      setModal(true);
                      setColor("red")
                      
                    }} className="red-button">RED</button>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 mx-auto d-flex justify-content-between">
                  <div onClick={() => {
                      setModal(true);
                      setBall("0")
                      
                    }} className="violet-red-btn d-flex justify-content-center align-items-center">
                    0
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      setBall("1")
                      
                    }} className="small-green-btn d-flex justify-content-center align-items-center">
                    1
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      setBall("2")
                      
                    }} className="small-red-btn d-flex justify-content-center align-items-center">
                    2
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      setBall("3")
                      
                    }} className="small-green-btn d-flex justify-content-center align-items-center">
                    3
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      setBall("4")
                    }} className="small-red-btn d-flex justify-content-center align-items-center">
                    4
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mx-auto d-flex justify-content-between">
                  <div onClick={() => {
                      setModal(true);
                      setBall("5")
                      
                    }} className="violet-green-btn d-flex justify-content-center align-items-center">
                    5
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      setBall("6")
                      
                    }} className="small-red-btn d-flex justify-content-center align-items-center">
                    6
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      setBall("7")
                      
                    }} className="small-green-btn  d-flex justify-content-center align-items-center">
                    7
                  </div>
                  <div onClick={()=>{
                    setModal(true)
                    setBall("8")

                  }   
                      
                      
                    } className="small-red-btn d-flex justify-content-center align-items-center">
                    8
                  </div>
                  <div onClick={() => {
                      setModal(true);
                      
                      setBall("9")
                      
                    }} className="small-green-btn d-flex justify-content-center align-items-center">
                    9
                  </div>
                </div>
              </div>
            </div>

            {/* <-------------------------------Previous-ROund-Results-table----------> */}
            <div>
              <div className="color-game-h mt-2">
                <div className="px-2 pt-1">
                  <p>Previous Rounds Results</p>
                </div>
              </div>
              <div className="table-h-div row">
                <div className="col-4 d-flex align-items-center ps-2">
                  Period
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center px-2">
                  Number
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center ">
                  Result
                </div>
              </div>
              <div className="table-inner-row row">
                <div className="col-4 d-flex align-items-center ps-2">
                  2420345009120
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center px-2">
                  6
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center ">
                  <div className="red-dot"></div>
                  <div className="violet-dot"></div>
                  <div className="green-dot"></div>
                </div>
              </div>
              <div className="table-inner-row row">
                <div className="col-4 d-flex align-items-center ps-2">
                  2420345009120
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center px-2">
                  6
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center ">
                  <div className="red-dot"></div>
                  <div className="violet-dot"></div>
                  <div className="green-dot"></div>
                </div>
              </div>
              <div className="table-inner-row row">
                <div className="col-4 d-flex align-items-center ps-2">
                  2420345009120
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center px-2">
                  6
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center ">
                  <div className="red-dot"></div>
                  <div className="violet-dot"></div>
                  <div className="green-dot"></div>
                </div>
              </div>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<<<-----------------------My-Bets-table-------------->>>>>>>>>> */}
            <div className="My-Bets-table">
              <div className="color-game-h mt-2">
                <div className="px-2 pt-1">
                  <p>My Bets</p>
                </div>
              </div>
              <div className="table-inner-row row">
                <div className="col-4 d-flex align-items-center ps-2">
                  2420345009120
                </div>
                <div className="col-2 d-flex align-items-center fail">Fail</div>
                <div className="col-2 d-flex align-items-center fail">
                  -10.00
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end ">
                  <div
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {!toggle ? (
                      <FaRegPlusSquare className="plus-icon" />
                    ) : (
                      <FaRegMinusSquare className="plus-icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {toggle && (
              <div className="card bet-menu-card">
                <div className="row px-2 pt-2 bet-menu-card-h">
                  Period Detail
                </div>
                <div className="row">
                  <div className="col-6 px-3 pt-1">Period</div>
                  <div className="col-6  pt-1">202401163636</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Contract Money</div>
                  <div className="col-6 pt-1">20.00</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Delivery</div>
                  <div className="col-6 pt-1">19.60</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Fee</div>
                  <div className="col-6 pt-1">20.0</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Result</div>
                  <div className="col-6 pt-1 d-flex ">
                    0 <div className="red-dot ms-2"></div>
                    <div className="green-dot ms-2"></div>
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Select</div>
                  <div className="col-6 pt-1">Green</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Status</div>
                  <div className="col-6 pt-1 fail">fail</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Amount</div>
                  <div className="col-6 pt-1 fail">-20.0</div>
                </div>
                <div className="row mt-1">
                  <div className="col-6 px-3 pt-1">Create Time</div>
                  <div className="col-6 pt-1 ">2024-01-16 17:27:33</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <RightSidebar />
        {modal && <ShowModal />}
      </div>
    </div>
  );
};

export default ColorGame;
