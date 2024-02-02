import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SliderH from "./SliderH";
import "./App.css";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-dark">
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
      <div className="row">
      <Sidebar showSidebar={showSidebar} />
      <SliderH/>

      </div>
      
      
      
    </div>
  );
}

export default App;
