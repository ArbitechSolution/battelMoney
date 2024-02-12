import React from "react";
import a from "../../Media/TP2020.webp";
import e from "../../Media/Lucky7A.webp";
import b from "../../Media/32Cards.webp";
import c from "../../Media/32CardsB.webp";
import d from "../../Media/DT2020.webp";
import f from "../../Media/color-game2.png";
import "./LiveCasino.css";

const LiveCasino = () => {
  return (
    <div className="col-lg-10">
      <div className="row">
        <div className="col-12 p-3">
          <div className="bet-h ">
            <h4 className="p-2 ms-2">Matched Bet</h4>
            <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div class="card casinocard-div ms-2 mt-3">
                      <img class="small-card-img" src={a} alt="a" />
                      <div class="overlaySmallCard d-flex justify-content-center">
                        <p class="">TeenPatti 20-20</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div class="card casinocard-div ms-2 mt-3">
                      <img class="small-card-img" src={b} alt="a" />
                      <div class="overlaySmallCard d-flex justify-content-center">
                        <p class="">32 CardA</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                    <div className="card casinocard-div mt-3">
                      <img className=" small-card-img" src={c} alt="a" />
                      <div className="overlaySmallCard d-flex justify-content-center">
                        <p className="">32 CardB</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                    <div className="card casinocard-div  mt-3">
                      <img className=" small-card-img" src={d} alt="a" />
                      <div className="overlaySmallCard d-flex justify-content-center">
                        <p className="">Dragon Tiger 20-20</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="card casinocard-div ms-2 mt-3 ">
                      <img className=" small-card-img" src={e} alt="a" />
                      <div className="overlaySmallCard d-flex justify-content-center">
                        <p className="">Lucky 7A</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-3 col-sm-6">
                    <div className="card casinocard-div ms-2 mt-3 pb-2 ">
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
