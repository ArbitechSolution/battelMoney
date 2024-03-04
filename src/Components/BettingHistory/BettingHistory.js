import React from "react";
import "./BettingHistory.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBetHistoryData } from "../../Redux/Slices/betHistorySlice";

const BettingHistory = () => {
  const dispatch = useDispatch();
  const { betHistory, isLoading, error } = useSelector(
    (state) => state.betHistory
  );
 
  const token = sessionStorage.getItem("token");
  // console.log("storedJwtToken ",storedJwtToken)
  const userId = sessionStorage.getItem("userData");
  // console.log("stored userdata ",userdata);

  useEffect(() => {
    dispatch(fetchBetHistoryData({ id: userId, token }));
  }, [dispatch, userId, token]);

  useEffect(() => {
    if (betHistory) {
      console.log("Response data from  bethistory API:", betHistory.data);
    }
  }, [betHistory]);

  if (isLoading) {
    // return <div>Loading...</div>;
  }

  if (error) {
    console.log("bet history call is having error");
  }
  return (
    <div className="col-lg-10 com-h">
      <div className="row">
        <div className="col-12 p-3">
          <div className="bet-h ">
            <h4 className="p-2 ms-2">Betting History</h4>

            <div class="dates-div p-1 d-flex row">
              <div className="col-md-3 mt-1">
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
                      className="date-input "
                      value="2024-02-10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1">
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
                      className="date-input "
                      value="2024-02-10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2 mt-1">
                <button className="btn btn-success ms-2">
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

            <table class="table table-dark table-striped bd">
              <thead>
                <tr>
                  <th scope="col">Match</th>
                  <th scope="col">GAME TYPE</th>
                  <th scope="col">BET FOR</th>
                  <th scope="col">ODDS</th>
                  <th scope="col">STAKE</th>
                  <th scope="col">PROFIT</th>
                </tr>
              </thead>
              <tbody>
                {betHistory && betHistory.data && betHistory.data.length > 0 ? (
                  betHistory.data.map((currElem, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{currElem.remark}</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>{currElem.stake}</td>
                      <td>@mdo</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">
                      <div className="record p-2">
                        <h6>NO RECORD!!!</h6>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingHistory;
