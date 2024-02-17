import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

import Home from "./Components/Home/Home";
import Sport from "./Components/Sport/Sport";
import WalletSignIn from "./Components/WalletSignin/WalletSignIn";
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
import InPlay from "./Components/InPlay/InPlay";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ColorGame from "./Components/ColorGame/ColorGame";
import Aviator from "./Components/Aviator/Aviator";
// import WalletSignIn from "./Components/WalletSignin/WalletSignIn";
// import WalletSignIn from "./Components/WalletSignin/WalletSignIn";
const App = ()=> {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-black position-relative row app-row ">
      <BrowserRouter>
     
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
     
     <Sidebar showSidebar={showSidebar} />

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/InPlay" element={<InPlay/>}/>
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
        <Route path="/WalletSignIn" element={<WalletSignIn/>}/>
        <Route path="/ColorGame" element={<ColorGame/>}/>
        <Route path="/Aviator" element={<Aviator/>}/>

      </Routes>
      </BrowserRouter>
     
      
     

      
      
      
      
    </div>
  );
}

export default App;
