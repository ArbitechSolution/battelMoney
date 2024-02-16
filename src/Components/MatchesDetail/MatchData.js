import React from "react";

const MatchData = () => {
  return (
    <div className="row match-div">
      <div className="col-lg-8 ">
        <div className=" d-flex justify-content-between ">
          <div className="d-flex">
            <div className="schedule-btn ms-2 mt-2 pt-2 d-flex flex-column justify-content-center align-items-center">
              Tommorow
              <p>4:14 PM</p>
            </div>
            <div className="ms-3">
              <h6 className="match-name mt-2 mb-0">
                ENGLAND U19 <span className="vsd">V</span> ZImbabwew U19
              </h6>
              <span className="tournamnet-name mt-0">ICC U19 Worldcup</span>
            </div>
          </div>
          {/* <div>
            <button className="b1-btn">B 1</button>
            <button className="f9-btn">F 9</button>
          </div> */}
        </div>
      </div>

      <div className="col-lg-4 order-3">
        <div className="row">
          <div className="col-4">
            <div className="mt-3">
              <button className="blue-btn ">10</button>
              <button className=" ms-2 orange-btn">10</button>
            </div>
          </div>
          <div className="col-4">
            <div className="mt-3">
              <button className="blue-btn ">10</button>
              <button className=" ms-2 orange-btn">10</button>
            </div>
          </div>
          <div className="col-4">
            <div className="mt-3">
              <button className="blue-btn ">10</button>
              <button className=" ms-2 orange-btn">10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchData;
