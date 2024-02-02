import React from "react";
import logo from "./Media/logo4.png";

function Navbar({ toggleSidebar,showSidebar }) {
  return (
    <nav className="navbar py-0 navbar-b d-block navbar-expand-lg navbar-dark bg-dark">
      <div className="">
        <div className="row">
          <div className="col-3">
            <a className="navbar-brand" href="">
              <img className="navbar-brand ms-3" src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-6  d-lg-block  d-none ">
            <div className="d-flex justify-content-center pt-2 ">
              <button className="nav-btns">SPORTS</button>
              <button className="nav-btns">INPLAY</button>
              <button className="nav-btns">LIVE TABLE</button>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-end pt-2 ">
            <button className="signin-btn me-3">SignIn</button>
          </div>
          <div className="col-3">
            {/* Toggler/collapsible Button */}
            <button
              className="navbar-toggler"
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
