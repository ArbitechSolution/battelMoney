import React from "react";
import "./Casino.css";

const CasinoResults = () => {
  return (
    <div className="col-lg-10 com-h">
      <div className="row">
        <div className="col-12 p-3">
          <div className="bet-h ">
            <h4 className="p-2 ms-2"> Casino Results</h4>

            <div class="dates-div p-2 d-flex ">
              <div className="row">
                <div className="col-md-5 mt-1">
                  <div className="d-flex">
                    <div className="from d-flex align-items-center justify-content-center">
                      Date:
                    </div>
                    <div class="">
                      <input
                        name="start_date"
                        id="from"
                        type="date"
                        autocomplete="off"
                        placeholder="Select date from"
                        className="date-input p-1 "
                        value="2024-02-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3  mt-1">
                  <div className="d-flex ">
                    <div className="from d-flex align-items-center justify-content-center">
                      Game
                    </div>
                    <select id="cars" name="cars">
                      <option value="volvo">32 Card</option>
                      <option value="saab">32 Card B</option>
                      <option value="opel">Teen Patti</option>
                      <option value="audi">Dragon tiger</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 mt-1">
                <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

                </div>
              </div>
            </div>
            <table class="table table-dark table-striped bd">
              <thead>
                <tr>
                  <th scope="col">ROUND ID</th>
                  <th scope="col">RESULT</th>
                  <th scope="col">DEBIT</th>
                  <th scope="col">CREDIT</th>
                  <th scope="col">CLOSING BAL.</th>
                  <th scope="col">NARRATION</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
      <th scope="row">1</th>
      <td>Match</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
              </tbody>
            </table>
            <div className="record p-2">
              <h6>NO RECORD!!!</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoResults;
