import React from 'react';
import "./Deposit.css";

const Deposit = () => {
  return (
    <div className="col-lg-10">
      <div className="row">
        <div className="col-12 p-2">
          <div className="funds-transfer-main-div ">
            <div className="F-h p-2 pb-0">
              <p className="ms-3">Deposit USDT</p>
            </div>

            <div className="form-area d-flex justify-content-center align-items-center">
              <div className="card deposit-card mt-4">
                <div className="mb-0 d-flex">
                  
                  <p className="step-1 ms-3 ">STEP 1:</p>
                  <p className="inst mb-0 ms-3">Transfer the amount below given scaner</p>
                </div>
                <div className="mb-0 d-flex">
                  
                  <p className="step-1 ms-3 ">STEP2:</p>
                  <p className=" inst mb-0 ms-3">Enter wallet address amount and trasaction id below and upload the transaction slip </p>
                </div>

                <div className="px-4">
                  <form>
                   <div className='row mt-2'>
                   
                    <div className='col-md-6 px-1'>
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        (Pay From)Wallet Address
                      </label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter  Amount"
                      />
                   
                    </div>

                    </div>
                    <div className='col-md-6 px-1'>
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter  Amount"
                      />
                   
                    </div>

                    </div>

                     
                   </div>
                   <div className='row mt-1'>
                    
                    <div className='col-md-6 px-1'>
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        Transaction ID
                      </label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter  Amount"
                      />
                   
                    </div>

                    </div>
                    <div className='col-md-6 px-1'>
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        Upload Transaction Slip
                      </label>
                      <input
                        type="file"
                        className="form-control mt-2"
                        // id="exampleInputEmail1"
                        // aria-describedby="emailHelp"
                        // placeholder="upload"
                      />
                   
                    </div>

                    </div>

                     
                   </div>
                    
                    
                    

                    <button type="submit" className="btn deposit-f-btn mt-lg-4 mt-md-3 mt-sm-3 ">
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
  )
}

export default Deposit