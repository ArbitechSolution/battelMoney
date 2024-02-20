import React from "react";
import a from "../../Media/img1.png";
import e from "../../Media/img5.png";
import b from "../../Media/img2.png";
import c from "../../Media/32CardsB.webp";
import d from "../../Media/img4.png";
import f from "../../Media/color-game2.png";
import g from "../../Media/img7.png";
import "./LiveCasino.css";

const LiveCasino = () => {
  return (
    <div className="col-lg-10">
      <div className="row">
        <div className="col-12 p-3">
          <div className="bet-h ">
            <h4 className="p-2 ms-2">Matched Bet</h4>
            <div className="d-flex flex-wrap flex-row justify-content-between align-items-center px-2 py-2">
              <div className="">
                <div class="card casinocard-div mx-auto ms-1 mt-3">
                  <img class="small-card-img" src={g} alt="a" />
                  <div class="overlaySmallCard d-flex justify-content-center">
                    <p class="">Aviator</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div class="card casinocard-div mx-auto ms-1 mt-3">
                  <img class="small-card-img" src={a} alt="a" />
                  <div class="overlaySmallCard d-flex justify-content-center">
                    <p class="">TeenPatti 20-20</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div class="card casinocard-div mx-auto ms-1 mt-3">
                  <img class="small-card-img" src={b} alt="a" />
                  <div class="overlaySmallCard d-flex justify-content-center">
                    <p class="">32 CardA</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card casinocard-div mx-auto  ms-1 mt-3">
                  <img className=" small-card-img" src={c} alt="a" />
                  <div className="overlaySmallCard d-flex justify-content-center">
                    <p className="">32 CardB</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card casinocard-div mx-auto ms-1 mt-3">
                  <img className=" small-card-img" src={d} alt="a" />
                  <div className="overlaySmallCard d-flex justify-content-center">
                    <p className="">Dragon Tiger 20-20</p>
                  </div>
                </div>
              </div>
              <div className="">
              <div className="card casinocard-div mx-auto ms-1 mt-3 ">
                <img className=" small-card-img" src={e} alt="a" />
                <div className="overlaySmallCard d-flex justify-content-center">
                  <p className="">Lucky 7A</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card casinocard-div mx-auto ms-1 mt-3 pb-2 ">
                <img className=" small-card-img" src={f} alt="a" />
                <div className="overlaySmallCard d-flex justify-content-center">
                  <p className="">Color Game</p>
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

export default LiveCasino;
