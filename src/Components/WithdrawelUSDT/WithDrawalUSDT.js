import React from 'react';
import "./withdrawal.css"

const WithDrawalUSDT = () => {
  return (
    <div className="col-lg-10">
    <div className="row">
      <div className="col-12 p-2">
        <div className="withdrawal-main-div ">
          <div className="F-h p-2 pb-0">
            <p className="ms-3">USDT WithDrawal</p>
          </div>

          <div className="form-area d-flex justify-content-center align-items-center">
            <div className='d-flex justify-content-center flex-column'>
            <div className="F-h p-2 pb-0">
            <p className="ms-3">Upload USDT Amount</p>
          </div>
          <div className="card w-card mt-1">
              <div className="mb-0">
                
                <p className="b-o ms-3 ">Upload Amount</p>
              </div>

              <div className="px-4">
                <form>
                  <div class="form-group">
                    <label className="" for="exampleInputEmail1"> USDT BEP Address</label>
                    <input
                      type="text"
                      className="form-control mt-2 user-id-input"
                    //   id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Upload USDT BEP20 address"
                    />
                   
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      Amount
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2"
                    //   id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter  Amount"
                    />
                 
                  </div>
                  

                  <button type="submit" className="btn transfer-btn mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            </div>
         
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WithDrawalUSDT