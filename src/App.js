import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import SliderH from "./Components/MatchesDetail/SliderH";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RightSidebar from "./Components/RightSidebar/RIghtSidebar"
import MainArea from "./Components/MatchesDetail/MatchesDetail";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-black row">
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
     
      <Sidebar showSidebar={showSidebar} />
      <MainArea/>
      <RightSidebar/>

      
      
      
      
    </div>
  );
}

export default App;
