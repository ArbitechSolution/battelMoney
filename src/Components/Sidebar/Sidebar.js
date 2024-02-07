import React from "react";
import { useState } from "react";
import home from "../../Media/1.png";
import inplay from "../../Media/2.png";
import casino from "../../Media/3.png";
import tennis from "../../Media/4.png";
import cricket from "../../Media/5.png";
import football from "../../Media/6.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ showSidebar }) {
  const [item1, setItem1] = useState(false);
  const [subMenu,setSubMenu]= useState(false);
  return (
    <div
      className={`sidebar side-bar col-lg-2 col-sm-4  h-sm-auto d-lg-block${
        showSidebar ? " d-block" : " d-none"
      }`}
    >
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="sb-h py-2 pt-3 ">QUICK LINKS</div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="d-flex">
                <NavLink  className="nav-link" to="/">

                
                <img className=" side-icon" src={home} alt="h" />
                <span className="ms-2">HOME</span>
                </NavLink>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <NavLink className="nav-link" to="/sport">
                <img className=" side-icon" src={inplay} alt="h" />
                <span className="ms-2">IN-PLAY</span>

                </NavLink>
                
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img className=" side-icon" src={casino} alt="h" />
                <span className="ms-2">LIVE CASINO</span>
              </div>
            </li>
          </ul>
          <div className="sb-h py-2 pt-3 ">SPORTS MENU</div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="d-flex">
                <img className=" side-icon" src={inplay} alt="h" />
                <span className="ms-2">IN-PLAY</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img className=" side-icon" src={cricket} alt="h" />
                <span className="ms-2">CRICKET</span>
                
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img className=" side-icon" src={football} alt="h" />
                <span className="ms-2">FOOTBALL</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex">
                <img className=" side-icon" src={tennis} alt="h" />
                <span className="ms-2" onClick={()=>{setItem1(!item1)}}>TENNIS</span>
                
              
              </div>
              
            </li>
            {
              item1 &&
              <NavLink className="nav-link" to="/Sport">
                 <div className="menu">
              <p>Pakistan vs England</p>

           
            </div>

              </NavLink>
             
            }
           
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
