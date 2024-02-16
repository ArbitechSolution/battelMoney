import React from "react";
import "./Transaction.css";

const TransactionHistory = () => {
  return (
    <div className="col-lg-10 com-h">
      <div className="row">
        <div className="col-12 p-3">
          <div className="bet-h ">
            <h4 className="p-2 ms-2">MY TRANSACTIONS</h4>
            <div class="dates-div container-fluid p-2 d-flex ">
              <div className="row">
                <div className="col-md-4  mt-1">
                  <div className="d-flex ">
                    <div className="from d-flex align-items-center justify-content-center px-1">
                      Type
                    </div>
                    <select id="cars" name="cars">
                      <option value="volvo">All</option>
                      <option value="saab">Credit Cancel</option>
                      <option value="opel">Withdrawal</option>
                      <option value="audi">Withdrawal Cancel</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mt-1">
                  <div className="d-flex">
                    <div className="from d-flex align-items-center justify-content-center">
                      From:
                    </div>
                    <div class="">
                      <input
                        name="start_date"
                        id="from"
                        type="date"
                        autocomplete="off"
                        placeholder="Select date from"
                        className="date-input p-2 "
                        value="2024-02-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-1">
                  <div className="d-flex ">
                    <div className="from d-flex align-items-center justify-content-center">
                      To:
                    </div>
                    <div class="">
                      <input
                        name="start_date"
                        id="from"
                        type="date"
                        autocomplete="off"
                        placeholder="Select date from"
                        className="date-input  p-2"
                        value="2024-02-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-1">
                  <button className="btn btn-success ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>{" "}
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="record p-2">
            <h6>NO RECORD!!!</h6>
          </div> */}
          </div>
          <div className="d-flex  mt-2">
            <div className="deposit-detail-btn">
              {" "}
              Total Deposit : <span className="ms-1">0</span>
            </div>
            <div className="withdrawal-detail-btn ms-2">
              Total Withdrawal : <span className="ms-1">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
