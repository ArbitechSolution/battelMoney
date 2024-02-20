import React from "react";
import a from "../../Media/img1.png";
import e from "../../Media/img5.png";
import b from "../../Media/img2.png";
import c from "../../Media/32CardsB.webp";
import d from "../../Media/img4.png";
import f from "../../Media/img6.png";
import g from "../../Media/img7.png";
import { NavLink } from "react-router-dom";
const SmallCards = () => {
  return (
    <>
      <div className="col-6">
        <NavLink to="/TeenPatti" className="nav-link">

        
        <div className="card smallcard-div ms-2 mt-3">
          <img className=" small-card-img" src={a} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">TeenPatti 20-20</p>

          </div>
        </div>
        </NavLink>
      </div>
      <div className="col-6">
        <NavLink  to="/32Cards" className="nav-link">
        <div className="card smallcard-div ms-2 mt-3">
          <img className=" small-card-img" src={b} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">32 CardA</p>

          </div>
        </div>

        </NavLink>
        
      </div>
      <div className="col-6">
        <NavLink className="nav-link" to="/32CardsB">

       
        <div className="card smallcard-div ms-2 mt-3">
          <img className=" small-card-img" src={c} alt="a" />
          <div className="overlaySmallCard d-flex justify-content-center">
            <p className="">32 CardB</p>

          </div>
        </div>
        </NavLink>
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
      <div className="col-12 p-2">
        <div className="card aviator-card mt-2 ">
          <img className=" aviator-card-img" src={g} alt="a"/>
          <div className="overlayAviatorCard d-flex justify-content-center">
            <p className="overlayAviatorcard-p">Aviator</p>

          </div>


        </div>

      </div>
    </>
  );
};

export default SmallCards;
