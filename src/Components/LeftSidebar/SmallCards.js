import React from "react";
import a from "../../Media/TP2020.webp";
import e from "../../Media/Lucky7A.webp";
import b from "../../Media/32Cards.webp";
import c from "../../Media/32CardsB.webp";
import d from "../../Media/DT2020.webp";
import f from "../../Media/color-game2.png";
const SmallCards = () => {
  return (
    <>
      <div className="col-6">
        <div className="card smallcard-div ms-2 mt-3">
          <img className=" small-card-img" src={a} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">TeenPatti 20-20</p>

          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card smallcard-div ms-2 mt-3">
          <img className=" small-card-img" src={b} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">32 CardA</p>

          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card smallcard-div ms-2 mt-3">
          <img className=" small-card-img" src={c} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">32 CardB</p>

          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card smallcard-div ms-2 mt-3">
          <img  className=" small-card-img" src={d} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">Dragon Tiger 20-20</p>

          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card smallcard-div ms-2 mt-3">
          <img  className=" small-card-img" src={e} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">Lucky 7A</p>

          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card smallcard-div ms-2 mt-3">
          <img  className=" small-card-img" src={f} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">Color Game</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCards;
