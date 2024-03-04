import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLossProfitData } from '../../Redux/Slices/lossProfitSlice';

const ProfitLoss = () => {
  const dispatch = useDispatch();
  const { lossProfitData, isLoading, error } = useSelector((state) => state.lossProfit);
  const token = sessionStorage.getItem("token");
  const uid = '727681'; // Replace with the user's UID
  const fromDate = ''; // Define your fromDate
  const toDate = ''; // Define your toDate
  useEffect(() => {
    dispatch(fetchLossProfitData({ uid, fromDate, toDate, token }));
  }, [dispatch, uid, fromDate, toDate, token]);
  useEffect(() => {
    if (lossProfitData) {
      console.log('Fetching lossProfitData', lossProfitData)
   
    }
  }, [lossProfitData]);

  return (
    <div className="col-lg-10 com-h">
    <div className="row">
      <div className="col-12 p-3">
        <div className="bet-h ">
          <h4 className="p-2 ms-2">Profit & Loss</h4>
          <div class="dates-div p-2 d-flex ">
            <div className='row'>
                <div className='col-md-5 mt-1'>
                <div className="d-flex">
              <div className="from d-flex align-items-center justify-content-center">From:</div>
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
                <div className='col-md-5 mt-1'>
                <div className="d-flex ">
              <div className="from d-flex align-items-center justify-content-center">To:</div>
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
                <div className='col-md-2 mt-1'>
                <button className="btn btn-success "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg> Search</button>

                </div>

            </div>
             
              
          </div>
          <table class="table table-dark table-striped bd">
              <thead>
                <tr>
                  <th scope="col">MARKEET</th>
                  <th scope="col">START TIME</th>
                  <th scope="col">SETTELED TIME</th>
                  <th scope="col">PROFIT/LOSS</th>
                  
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
            <h6>You have no bets in this time period</h6>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfitLoss