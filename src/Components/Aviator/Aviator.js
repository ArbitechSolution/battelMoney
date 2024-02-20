import React from "react";
import { useState } from "react";
import RightSidebar from "../RightSidebar/RIghtSidebar";
import "./Aviator.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Aviator = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="col-lg-10 ">
      <div className="row home ">
        <div className="col-lg-8 p-2">
          <div className="Aviator-main-div pt-1 p-2">
            <div className="aviator-h-div d-flex px-2 pt-1">
              <h3>Avaitor</h3>
              <p className="mt-2 px-1">(292745632)</p>
            </div>
            <div className="small-btns-div d-flex">
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-v-btn mx-1">3.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
              <div className="small-g-btn mx-1">1.20x</div>
            </div>
            <div className="canvas-main-div mt-3 mx-auto">
              
            </div>
            <div className="bet-btn-main-div mt-2">
              <div className="row mt-5">
                <div className="col-md-7 col-sm-12 mx-auto">
                  <div className="row">
                    <div className="col-5 d-flex justify-content-end flex-column">
                      <div className="counter-div d-flex justify-content-between p-1">
                        <div className="count-div d-flex justify-content-center">
                          <p>{count}</p>
                        </div>
                        <div className="d-flex count-icons my-auto">
                          <FaMinus
                            onClick={() => {
                              setCount(count - 1);
                            }}
                            className="m-icon me-1"
                          />
                          <FaPlus
                            onClick={() => {
                              setCount(count + 1);
                            }}
                            className="p-icon"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="row mt-1">
                        <button className="Amount-btn mx-1">5$</button>
                        <button className="Amount-btn mx-1">5$</button>

                        </div>
                        <div className="row mt-1">
                        <button className="Amount-btn mx-1">5$</button>
                        <button className="Amount-btn mx-1">5$</button>

                        </div>
                        
                        


                      </div>
                    </div>
                    <div className="col-7 d-flex justify-content-start mx-auto">
                        <button className="bet-button">BET

                        </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default Aviator;
