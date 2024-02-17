import React from "react";
import MatchOdds from "./MatchOdds";
import BookMaker from "./BookMaker";
import Fancy from "./Fancy";

const OpenMarkeet = () => {
  return (
    <div className="row  bg-dark ">
      <div className="betting-info">
        <button className="betting-info-btn px-2 bg-dark">OPEN MARKET</button>
        <button className="betting-info-btn px-2 bg-dark">ODDS</button>
        <button className="betting-info-btn px-2 bg-dark">BOOKMAKER</button>
        <button className="betting-info-btn px-2 bg-dark">FANCY</button>
      </div>
      <MatchOdds/>
      <BookMaker/>
      <Fancy/>
    </div>
  );
};

export default OpenMarkeet;
