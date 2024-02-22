import React from "react";
import { useState } from "react";
import home from "../../Media/1.png";
import inplay from "../../Media/2.png";
import casino from "../../Media/3.png";
import tennis from "../../Media/4.png";
import cricket from "../../Media/5.png";
import football from "../../Media/6.png";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ showSidebar,handleLinkClick }) {
  const [inPlayMenu, setInplayMenu] = useState(false);
  const [tennisMenu, setTennisMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [cricketMenu, setCricketMenu] = useState(false);
  const [footballMenu, setFootballMenu] = useState(false);

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
 
  return (
    <div
      className={`sidebar   side-bar col-lg-2 col-sm-4  h-sm-auto d-lg-block${
        showSidebar ? "d-block sm-side-bar position-absolute" : " d-none"
      }`}
    >
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="sb-h py-2 pt-3 ">QUICK LINKS</div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="d-flex ">
                <NavLink onClick={handleLinkClick} className="nav-link" to="/">
                  <img className=" side-icon" src={home} alt="h" />
                  <span className="ms-2">HOME</span>
                </NavLink>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <NavLink onClick={handleLinkClick} className="nav-link" to="/InPlay">
                  <img className=" side-icon" src={inplay} alt="h" />
                  <span className="ms-2">IN-PLAY</span>
                </NavLink>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <NavLink onClick={handleLinkClick} className="nav-link" to="/LiveCasino">
                  <img className=" side-icon" src={casino} alt="h" />
                  <span className="ms-2">LIVE CASINO</span>
                </NavLink>
              </div>
            </li>
          </ul>
          <div className="sb-h py-2 pt-3 ">SPORTS MENU</div>
          <ul className="list-group">
            <li className="list-group-item">
              <NavLink className="nav-link">
              <div
                onClick={() => {
                  setInplayMenu(!inPlayMenu);
                }}
                className="d-flex"
              >
                <img className=" side-icon" src={inplay} alt="h" />
                <span className="ms-2">IN-PLAY</span>
              </div>

              </NavLink>
              
            </li>
            {inPlayMenu && (
              <div className="menu d-flex justify-content-between align-items-center px-2 ">
                Test Match
                
              </div>
            )}
            <li className="list-group-item">
              <NavLink className="nav-link">
              <div
                onClick={() => {
                  setCricketMenu(!cricketMenu);
                }}
                className="d-flex"
              >
                <img className=" side-icon" src={cricket} alt="h" />
                <span className="ms-2">CRICKET</span>
              </div>

              </NavLink>
              
            </li>
            {cricketMenu && (
              <div class="d-flex flex-column">
                <div
                  onClick={() => setSubMenu(!subMenu)}
                  className="menu d-flex justify-content-between align-items-center px-2 "
                >
                  Test Match
                  <IoMdArrowDropdown className="menu-icon" />
                </div>
                {subMenu && (
                  <div className="d-flex flex-column">
                    <div className="subMenu d-flex justify-content-center align-items-center">
                      <NavLink onClick={handleLinkClick} to="/Sport" className="nav-link">
                        Pakistan vs Newzeeland
                      </NavLink>
                    </div>
                    <div className="subMenu d-flex justify-content-center align-items-center">
                      <NavLink onClick={handleLinkClick}  to="/Sport" className="nav-link">
                        Pakistan vs Newzeeland
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            )}

            <li className="list-group-item">
              <NavLink className="nav-link">
              <div
                onClick={() => {
                  setTennisMenu(!tennisMenu);
                }}
                className="d-flex"
              >
                <img className=" side-icon" src={tennis} alt="h" />
                <span className="ms-2">TENNIS</span>
              </div>

              </NavLink>
              
            </li>
            {tennisMenu && (
              <div class="d-flex flex-column">
                <div
                  onClick={() => setSubMenu(!subMenu)}
                  className="menu d-flex justify-content-between align-items-center px-2 "
                >
                  Test Match
                  <IoMdArrowDropdown className="menu-icon" />
                </div>
                {subMenu && (
                  <div className="d-flex flex-column">
                    <div className="subMenu d-flex justify-content-center align-items-center">
                      <NavLink onClick={handleLinkClick}  to="/Sport" className="nav-link">
                        Pakistan vs Newzeeland
                      </NavLink>
                    </div>
                    <div className="subMenu d-flex justify-content-center align-items-center">
                      <NavLink onClick={handleLinkClick}  to="/Sport" className="nav-link">
                        Pakistan vs Newzeeland
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            )}

            <li className="list-group-item">
              <NavLink className="nav-link">
              <div
                onClick={() => {
                  setFootballMenu(!footballMenu);
                }}
                className="d-flex"
              >
                <img className=" side-icon" src={football} alt="h" />
                <span className="ms-2">FOOTBALL</span>
              </div>
              </NavLink>
            </li>
            {footballMenu && (
              <div class="d-flex flex-column">
                <div
                  onClick={() => setSubMenu(!subMenu)}
                  className="menu d-flex justify-content-between align-items-center px-2 "
                >
                  Test Match
                  <IoMdArrowDropdown className="menu-icon" />
                </div>
                {subMenu && (
                  <div className="d-flex flex-column">
                    <div className="subMenu d-flex justify-content-center align-items-center">
                      <NavLink onClick={handleLinkClick}  to="/Sport" className="nav-link">
                        Pakistan vs Newzeeland
                      </NavLink>
                    </div>
                    <div className="subMenu d-flex justify-content-center align-items-center">
                      <NavLink onClick={handleLinkClick}  to="/Sport" className="nav-link">
                        Pakistan vs Newzeeland
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
