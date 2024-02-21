import React from "react";
import RightSidebar from "../RightSidebar/RIghtSidebar";
import "./DragonTiger.css";
import a from "../../Media/10SS.png";
import b from "../../Media/3SS.png";
import c from "../../Media/2HH.png";
import d from "../../Media/AHH.png";
import e from "../../Media/KHH.png";
import { MdCancel } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { useState } from "react";
import heart from "../../Media/heart-2.png";
import diamond from "../../Media/diamond-2.png";
import club from "../../Media/club-2.png";
import spade from "../../Media/spade-2.png";
import c1 from "../../Media/1.jpg";
import c2 from "../../Media/2.jpg";
import c3 from "../../Media/3.jpg";
import c4 from "../../Media/4.jpg";
import c5 from "../../Media/5.jpg";
import c6 from "../../Media/6.jpg";
import c7 from "../../Media/7.jpg";
import c8 from "../../Media/8.jpg";
import c9 from "../../Media/9.jpg";
import c10 from "../../Media/10.jpg";
import c11 from "../../Media/11.jpg";
import c12 from "../../Media/12.jpg";
import c13 from "../../Media/13.jpg";

const DragonTiger = () => {
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
            <p className="my-auto mx-2">Dragon Tiger</p>
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
              <button className="orb mx-1 my-1">5</button>
              <button className="orb mx-1 my-1">10</button>
              <button className="orb mx-1 my-1  ">20</button>
              <button className="orb mx-1 my-1">50</button>
              <button className="orb mx-1 my-1">100</button>
              <button className="orb mx-1 my-1">200</button>
              <button className="orb mx-1 my-1">500</button>
              <button className="orb mx-1 my-1">1000</button>
            </div>
          </div>
          <div className="modal-footer row mt-1">
            <div className="col-5"></div>
            <div className="col-7 py-2">
              <button
                onClick={() => {
                  setShowdataModal(false);
                }}
                className="mcb "
              >
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
                <div className="text-center">Dragon:</div>
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
            
            <div className="d-flex flex-column player-a-div justify-content-center align-items-center mt-2">
             <div>
             No Pair

             </div>
             <div>
                Dragon: Even|Black|Club
             </div>
             <div>
                Tiger: Even|Red|Diamond
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
                <p className=" mt-1 ">DRAGON TIGER</p>
              </div>
              <div>
                <p className="mt-1 px-2">
                  Round ID: 2024021633648 | Left Time: 56 | Rules
                </p>
              </div>
            </div>
            <div className="card  teenpatti-game-card p-1 mt-1">
              <div className="row">
                <div className="col-10 d-flex ">
                  <div className="player-a-div mt-4">
                    <div className="gamecard-div mx-1">
                      <img src={c} className="img-fluid" alt="a" />
                    </div>
                  </div>
                  <div className="player-a-div mt-4">
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

            {/* <-------------------------------Dragon-Tiger-pair----------> */}
            <div className="row dragon-tiger-pair-div mt-2 ">
              <div className="col-4 p-2">
                <div onClick={()=>{setShowdataModal(true)}}   className="dragon-div d-flex justify-content-between px-2">
                  <div className="">
                    <p className="my-0 mt-1">Dragon</p>
                    <p className="my-0 mt-1 red-zero">0</p>
                  </div>
                  <div>
                    <p className="mt-4">0</p>
                  </div>
                </div>
              </div>
              <div className="col-4 p-2">
                <div onClick={()=>{setShowdataModal(true)}} className="tiger-div d-flex justify-content-between px-2">
                  <div className="">
                    <p className="my-0 mt-1">Tiger</p>
                    <p className="my-0 mt-1 red-zero">0</p>
                  </div>
                  <div>
                    <p className="mt-4">0</p>
                  </div>
                </div>
              </div>
              <div className="col-4 p-2">
                <div onClick={()=>{setShowdataModal(true)}} className="pair-div d-flex justify-content-between px-2">
                  <div className="">
                    <p className="my-0 mt-1">Pair</p>
                    <p className="my-0 mt-1 red-zero">0</p>
                  </div>
                  <div>
                    <p className="mt-4">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <----------------------------Dragon-Tiger------------->>>>>>>>>>> */}
            <div className="row">
              <div className="col-lg-6 border-tiger py-2">
            <p className="dragon-heading ms-3 mt-2">Dragon</p>
                <div className="dragon-column ">
                  <div className="row">
                    <div className="col-3  ">
                      <div className="  button-column pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                          <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto">
                            
                            EVEN
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="  button-column  pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                          <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto">
                            
                            ODD
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="  button-column  pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                          <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto d-flex justify-content-center align-items-center">
                            <div className=" card-symbol-div d-flex align-items-center justify-content-center">
                              <img className="card-symbol-img" src={diamond} alt=""/>
                            </div>
                            <div className=" card-symbol-div d-flex justify-content-center align-items-center ms-1">
                              <img className="card-symbol-img" src={heart} alt="" />
                            </div>
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="  button-column  pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                        <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto d-flex justify-content-center align-items-center">
                            <div className=" card-symbol-div d-flex align-items-center justify-content-center">
                              <img className="card-symbol-img" src={club} alt=""/>
                            </div>
                            <div className=" card-symbol-div d-flex justify-content-center align-items-center ms-1">
                              <img className="card-symbol-img" src={spade} alt="" />
                            </div>
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                  </div>
                </div>

               <div className="py-3">
                <div className="d-flex justify-content-center">0</div>
                <div className="cards-thirteen-div d-flex flex-wrap justify-content-center">
                    <div className="card-column-img-div  d-flex flex-column mx-1" >
                        <img className="card-column-img" src={c1} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c2} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c3} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c4} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c5} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c6} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c7} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c8} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c9} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>

                    <div onClick={()=>{setShowdataModal(true)}}
                     className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c10} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c11} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c12} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c13} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                </div>

               </div>

              </div>
              <div className="col-lg-6 py-2">
            <p className="tiger-heading ms-3 mt-2">Tiger</p>
                <div className="dragon-column ">
                  <div className="row">
                    <div className="col-3  ">
                      <div className="  button-column pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                          <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto">
                            
                            EVEN
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="  button-column  pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                          <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto">
                            
                            ODD
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="  button-column  pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                          <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto d-flex justify-content-center align-items-center">
                            <div className=" card-symbol-div d-flex align-items-center justify-content-center">
                              <img className="card-symbol-img" src={diamond} alt=""/>
                            </div>
                            <div className=" card-symbol-div d-flex justify-content-center align-items-center ms-1">
                              <img className="card-symbol-img" src={heart} alt="" />
                            </div>
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="  button-column  pt-1">
                        <div className="d-flex justify-content-center">0</div>
                        <div>
                        <button onClick={()=>{setShowdataModal(true)}} className="blue-grey-btn mx-auto d-flex justify-content-center align-items-center">
                            <div className=" card-symbol-div d-flex align-items-center justify-content-center">
                              <img className="card-symbol-img" src={club} alt=""/>
                            </div>
                            <div className=" card-symbol-div d-flex justify-content-center align-items-center ms-1">
                              <img className="card-symbol-img" src={spade} alt="" />
                            </div>
                          </button>
                        </div>
                        <div className="d-flex justify-content-center dragon-heading">0</div>
                      </div>
                    </div>
                  </div>
                </div>

               <div className="py-3">
                <div className="d-flex justify-content-center">0</div>
                <div className="cards-thirteen-div d-flex flex-wrap justify-content-center">
                    <div className="card-column-img-div  d-flex flex-column mx-1" >
                        <img className="card-column-img" src={c1} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c2} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c3} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c4} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c5} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c6} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c7} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c8} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c9} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>

                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c10} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div onClick={()=>{setShowdataModal(true)}} className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c11} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c12} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                    <div className="card-column-img-div  d-flex flex-column mx-1"  >
                        <img className="card-column-img" src={c13} alt="a"/>
                        
                        <div className="card-zero d-flex justify-content-center">0</div>

                    </div>
                </div>

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
                    D
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    T
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    D
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    T
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    D
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    T
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    D
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    T
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    D
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    T
                  </div>
                  <div
                    onClick={() => {
                      setShowresultModal(true);
                    }}
                    className="rst-btn ms-1"
                  >
                    D
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

export default DragonTiger;
