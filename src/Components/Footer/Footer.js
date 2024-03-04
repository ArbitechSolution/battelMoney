import React from "react";
import "./Footer.css";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdAccessAlarm } from "react-icons/md";
import { FaChessBoard } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdSportsBaseball } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer-main-div 	d-block d-lg-none ms-1">
        <div className="row ">
          <div className="col-11 mx-auto">
            <div className="row  ">
              <div className="col-3  d-flex justify-content-center">
                <div className="pt-2 footer-data d-flex flex-column align-items-center justify-content-center ">
                <MdSportsBaseball  className="footer-icon"/>
                 
                  <span className="footer-h">SPORTS</span>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className="pt-2 footer-data d-flex flex-column align-items-center">
                <MdAccessAlarm className="footer-icon"/>
                <span className="footer-h">IN-PLAY</span>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className="pt-2  footer-data d-flex flex-column align-items-center">
                  <FaChessBoard className="footer-icon"/>
                  <span className="footer-h">LIVE TABLES</span>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <div className="pt-2 footer-data d-flex flex-column align-items-center">
                  <IoPersonSharp className="footer-icon"/>
                  <span className="footer-h">ACCOUNTS</span>
                  
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
