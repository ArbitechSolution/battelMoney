import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
// import SliderH from "./Components/MatchesDetail/SliderH";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import RightSidebar from "./Components/RightSidebar/RIghtSidebar"
// import MainArea from "./Components/MatchesDetail/MatchesDetail";
import Home from "./Components/Home/Home";
import Sport from "./Components/Sport/Sport";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = ()=> {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-black row">
      <BrowserRouter>
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
     
     <Sidebar showSidebar={showSidebar} />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sport" element={<Sport/>}/>

      </Routes>
      </BrowserRouter>
     
      
     

      
      
      
      
    </div>
  );
}

export default App;
