import React, { useState,useEffect } from "react";
import logo from "../../Media/logo4.png";
import "./Navbar.css";

import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink,Navigate,useLocation,useNavigate,useNavigation } from "react-router-dom";
import { MdLeaderboard } from "react-icons/md";
import { IoMdSwap } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineLegendToggle } from "react-icons/md";
import { MdOutlineMemory } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import StakeSettingModal from "./StakeSettingModal";
function Navbar({ toggleSidebar, showSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [active,setActive]= useState(window.location.pathname);
  const displayModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleLogout = () => {
    // Remove token from sessionStorage
    sessionStorage.removeItem('token');
  };
  const token = sessionStorage.getItem("token");
  // console.log("storedJwtToken ",storedJwtToken)
  useEffect(() => {
    // Update active link on route change
  
    const path = location.pathname;

    if (path === "/") {
      setActive("/");
    } else if (path === "/InPlay") {
      setActive("/InPlay");
    } else if (path === "/LiveCasino") {
      setActive("/LiveCasino");
    }
  }, [location.pathname]);
 
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
             <NavLink  onClick={()=>{setActive("/")}} to="/" className={` nav-btn ${
              active === "/"  && "is-active"
             }`}>SPORTS</NavLink> 
              <NavLink onClick={()=>{setActive("/InPlay")}} className={` nav-btn ${
              active === "/InPlay"  && "is-active"
             }`} to="/InPlay">INPLAY</NavLink>
              <NavLink onClick={()=>{setActive("/LiveCasino")}} to="/LiveCasino" className={` nav-btn ${
              active === "/LiveCasino"  && "is-active"
             }`}>LIVE TABLE </NavLink>
            </div>
          </div>
          <div className="col-3 col-lg-3  col-md-3 col-sm-3 order-lg-3 order-3  order-xsm-3 d-flex justify-content-end  ">
           
           {
            token ? (
              <div class="dropdown mt-0">
              <button class="dropbtn mt-2 pt-0 d-flex">
                <div className="person-icon-div">
                  <BsFillPersonFill className="person-icon" />
                </div>
                <IoMdArrowDropdown className="mt-2" />
              </button>
              <div class="dropdown-content">
                <NavLink to="/MyMarkeet">
                  <div className="d-flex justify-content-between ">
                    MY MARKEET
                    <MdLeaderboard />
                  </div>
                </NavLink>
                <NavLink to="/BettingHistory">
                  <div className="d-flex justify-content-between">
                    BETTING HISTORY
                    <MdLeaderboard />{" "}
                  </div>
                </NavLink>
                <NavLink to="/FundsTransfer">
                  <div className="d-flex justify-content-between">
                    FUND TRANSFER
                    <IoMdSwap />
                  </div>
                </NavLink>
                <NavLink to="/WithdrawalUSDT">
                  <div className="d-flex justify-content-between">
                    WITHDRAWEL USDT
                    <FaCreditCard />
                  </div>
                </NavLink>
                <NavLink to="/Deposit">
                  <div className="d-flex justify-content-between">
                    DEPOSIT
                    <FaCreditCard />{" "}
                  </div>
                </NavLink>
                <NavLink to="/WithdrawalHistory">
                  <div className="d-flex justify-content-between">
                    WITHDRAWAL HISTORY <FaList />{" "}
                  </div>
                </NavLink>
                <NavLink to="/AccountStatement">
                  <div className="d-flex justify-content-between">
                    ACCOUNT STATEMENT <MdPayments />{" "}
                  </div>
                </NavLink>
                <NavLink to="/TransactionHistory">
                  <div className="d-flex justify-content- between">
                    TRANSACTION HISTORY
                    <IoMdTrendingUp />
                  </div>
                </NavLink>
                <NavLink to="/ProfitLoss">
                  <div className="d-flex justify-content-between">
                    PROFIT-LOSS
                    <MdOutlineLegendToggle />
                  </div>
                </NavLink>
                <NavLink>
                  <div
                    onClick={() => displayModal()}
                    className="d-flex justify-content-between"
                  >
                    STAKE SETTING
                    <MdOutlineMemory />
                  </div>
                </NavLink>
                {modal && <StakeSettingModal closeModal={closeModal} />}
                <NavLink to="/CasinoResults">
                  <div className="d-flex justify-content-between">
                    CASINO RESULTS
                    <MdLeaderboard />
                  </div>
                </NavLink>
                <NavLink to="/ChangePassword">
                  <div className="d-flex justify-content-between">
                    CHANGE PASSWORD
                    <FaKey />
                  </div>
                </NavLink>
                <NavLink onClick={handleLogout} to="/">
                  <div className="d-flex justify-content-between">
                    LOGOUT
                    <FaKey />
                  </div>
                </NavLink>
              </div>
            </div>

            ):
            (
             <div>
             <NavLink to="/Login"><button className="signin-btn mt-2  me-3">SignIn</button></NavLink>
              <NavLink to="/WalletSignIn"><button className="wallet-btn mt-2  me-3">Wallet Sign...</button></NavLink>
             </div>


              

            )
           }
            
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
