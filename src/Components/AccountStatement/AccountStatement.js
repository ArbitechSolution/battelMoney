
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountStatement } from '../../Redux/Slices/accountStatementSlice';

const AccountStatement = () => {
  const dispatch = useDispatch();
  const { accountStatement, isLoading, error } = useSelector((state) => state.accountStatement);
  const userId = sessionStorage.getItem("userData");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const data = {
      uid: '727681',
      fromdate: '',
      todate: ''
    };
    dispatch(fetchAccountStatement({ data, token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (accountStatement) {
      console.log('Fetching account statement', accountStatement)
   
    }
  }, [accountStatement]);
  return (
    <div className="col-lg-10 com-h">
    <div className="row">
      <div className="col-12 p-3">
        <div className="bet-h ">
          <h4 className="p-2 ms-2">Account Statement</h4>

          <div class="dates-div p-2 d-flex ">
            <div className='row'>
                <div className="col-md-5 mt-1">
                <div className="d-flex">
              <div className="from d-flex align-items-center justify-content-center">From:</div>
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
                <div className="col-md-5 mt-1">
                <div className="d-flex ">
              <div className="from d-flex align-items-center justify-content-center">To:</div>
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
                <div className="col-md-2 mt-1">
                <button className="btn btn-success "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> Search</button>


                </div>

            </div>
              
              
          </div>
          <table class="table table-dark table-striped bd">
              <thead>
                <tr>
                  <th scope="col">NO.</th>
                  <th scope="col">DATE & TIME</th>
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
  )
}

export default AccountStatement