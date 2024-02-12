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
import MyMarkeet from "./Components/MyMarkeet/MyMarkeet";
import BettingHistory from "./Components/BettingHistory/BettingHistory";
import FundsTransfer from "./Components/FundsTransfer/FundsTransfer";
import WithdrawHistory from "./Components/WithdrawHistory/WithdrawHistory";
import Login from "./Components/Login/Login";
// import WithDrawalUSDT from "./Components/WithdrawelUSDT/WithDrawalUSDT";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WithDrawalUSDT from "./Components/WithdrawelUSDT/WithDrawalUSDT";
import AccountStatement from "./Components/AccountStatement/AccountStatement";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import ProfitLoss from "./Components/ProfitLoss/ProfitLoss";
import CasinoResults from "./Components/CasinoResults/CasinoResults";
import LiveCasino from "./Components/LiveCasino/LiveCasino";
import Deposit from "./Components/Deposit/Deposit";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
const App = ()=> {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-black row app-row ">
      <BrowserRouter>
      <Login />
      {/* <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
     
     <Sidebar showSidebar={showSidebar} /> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sport" element={<Sport/>}/>
        <Route path="/MyMarkeet" element={<MyMarkeet/>}/>
        <Route path="/BettingHistory" element={<BettingHistory/>}/>
        <Route path="/FundsTransfer" element={<FundsTransfer/>}/>
        <Route path="/WithdrawalUSDT" element={<WithDrawalUSDT/>}/>
        <Route path="/WithdrawalHistory" element={<WithdrawHistory/>}/>
        <Route path="/AccountStatement" element={<AccountStatement/>}/>
        <Route path="/TransactionHistory" element={<TransactionHistory/>}/>
        <Route path="/ProfitLoss" element={<ProfitLoss/>}/>
        <Route path="/CasinoResults" element={<CasinoResults/>}/>
        <Route path="/Deposit" element={<Deposit/>}/>
        <Route path="/ChangePassword" element={<ChangePassword/>}/>
        <Route path="/LiveCasino" element={<LiveCasino/>}/>
        <Route path="/Login" element={<Login/>}/>

      </Routes>
      </BrowserRouter>
     
      
     

      
      
      
      
    </div>
  );
}

export default App;
