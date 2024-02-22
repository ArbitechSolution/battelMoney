import React from "react";
import "./Footer.css";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdAccessAlarm } from "react-icons/md";
import { FaChessBoard } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="footer-main-div 	d-block d-lg-none ms-2">
        <div className="row ">
          <div className="col-11 mx-auto">
            <div className="row  ">
              <div className="col-3   d-flex justify-content-center">
                <div className="   d-flex flex-column align-items-center">
                  
                  <MdOutlineSportsBaseball />
                  Sports
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className=" d-flex flex-column align-items-center">
                <MdAccessAlarm />
                  Sports
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className=" d-flex flex-column align-items-center">
                  <FaChessBoard />
                  Sports
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className=" d-flex flex-column align-items-center">
                  <IoPersonSharp />
                  Sports
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
