import React from "react";
import logo from "../../Media/logo4.png";
import "./Navbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdLeaderboard } from "react-icons/md";
import { IoMdSwap } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineLegendToggle } from "react-icons/md";
import { MdOutlineMemory } from "react-icons/md";
function Navbar({ toggleSidebar, showSidebar }) {
  return (
    <nav className="navbar py-0  navbar-b d-block navbar-expand-lg navbar-dark bg-black">
      <div className="">
        <div className="row">
          <div className=" col-8 col-lg-3 col-sm-6  order-lg-1 order-2 ">
            <a className="navbar-brand" href="">
              <img className="navbar-brand ms-3" src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-lg-6  order-lg-2    d-lg-block  d-none ">
            <div className="d-flex justify-content-center pt-2 ">
              <button className="nav-btns">SPORTS</button>
              <button className="nav-btns">INPLAY</button>
              <button className="nav-btns">LIVE TABLE</button>
            </div>
          </div>
          <div className="col-3 col-lg-3  col-md-3 col-sm-3 order-lg-3 order-3  order-xsm-3 d-flex justify-content-end pt-2 ">
            <button className="signin-btn me-3">SignIn</button>
            <div class="dropdown">
  <button class="dropbtn d-flex"><div className="person-icon-div"><BsFillPersonFill className="p-icon" /></div><IoMdArrowDropdown  className="mt-2"/></button>
  <div class="dropdown-content">
    <NavLink to="/MyMarkeet"><div  className="d-flex justify-content-between ">MY MARKEET
    <MdLeaderboard /></div></NavLink>
    <NavLink to="/BettingHistory">
      <div className="d-flex justify-content-between">BETTING HISTORY
      <MdLeaderboard /> </div></NavLink>
    <NavLink to="/FundsTransfer"><div className="d-flex justify-content-between">FUND TRANSFER<IoMdSwap /></div></NavLink>
    <NavLink to="/WithdrawalUSDT"><div className="d-flex justify-content-between">WITHDRAWEL USDT<FaCreditCard />
      </div></NavLink>
    <NavLink to="/Deposit"><div className="d-flex justify-content-between">DEPOSIT
    <FaCreditCard /> </div></NavLink>
    <NavLink to="/WithdrawalHistory">
      <div className="d-flex justify-content-between">
      WITHDRAWAL HISTORY <FaList /> </div></NavLink>
    <NavLink to="/AccountStatement">
      <div className="d-flex justify-content-between">ACCOUNT STATEMENT <MdPayments /> </div></NavLink>
    <NavLink to="/TransactionHistory"><div className="d-flex justify-content- between" >TRANSACTION HISTORY<IoMdTrendingUp /></div></NavLink>
    <NavLink to="/ProfitLoss"><div className="d-flex justify-content-between">PROFIT-LOSS<MdOutlineLegendToggle /></div></NavLink>
    <NavLink to="/"><div className="d-flex justify-content-between">STAKE SETTING<MdOutlineMemory /></div></NavLink>
    <NavLink to="/CasinoResults"><div className="d-flex justify-content-between">CASINO RESULTS
    <MdLeaderboard /></div></NavLink>
    

    
   
   
  </div>
</div>


         
            
           
          </div>
          <div className=" col-1 col-lg-3 col-sm-3   order-lg-4 order-1 ">
            {/* Toggler/collapsible Button */}
            <button
              className="navbar-toggler mt-2 border-none"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div
              className={`collapse navbar-collapse${
                showSidebar ? " show" : ""
              }`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                {/* Add more navbar links here if needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
