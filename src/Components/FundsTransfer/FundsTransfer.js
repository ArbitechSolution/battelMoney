import React from "react";
import "./FundsTransfer.css";

const FundsTransfer = () => {
  return (
    <div className="col-lg-10">
      <div className="row">
        <div className="col-12 px-2 mt-1">
          <div className="funds-transfer-main-div ">
            <div className="F-h p-2 pb-0">
              <p className="ms-3">Fund Transfer</p>
            </div>

            <div className="form-area d-flex justify-content-center align-items-center">
              <div className="card f-card mt-4">
                <div className="mb-0">
                  <p className="balance-h mb-0 ms-3">Your Balance:</p>
                  <p className="b-o ms-3 "> O.61</p>
                </div>

                <div className="px-4">
                  <form>
                    <div class="form-group">
                      <label className="" for="exampleInputEmail1"> User ID</label>
                      <input
                        type="text"
                        className="form-control mt-2 user-id-input"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter  User ID"
                      />
                     
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        Amount To be Transfer
                      </label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter  Amount"
                      />
                   
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Password"
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
  );
};

export default FundsTransfer;
