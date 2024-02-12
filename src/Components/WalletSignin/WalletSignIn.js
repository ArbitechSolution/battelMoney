import React from 'react';
import "./WalletSignIn.css";
import a from "../../Media/logo4.png"

const WalletSignIn = () => {
  return (
    <div className="background-img">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card wallet-card  mt-5">
          <div className="d-flex justify-content-center mt-4">
            <img className="img-fluid img-div" src={a} alt="a" />
          </div>

          <div className="px-4">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Wallet Address
                </label>
                <input
                  type="text"
                  className=" login-input p-1 px-2"
                  id="exampleInputEmail1"
                  placeholder="Enter Wallet Address"
                  aria-describedby="emailHelp"
                />
              </div>
              
              <div className="d-flex justify-content-center">
              <button type="submit" class="btn login-btn mt-2">
                Login
              </button>

              

              </div>
              <div className="bth d-flex justify-content-center mt-2">Back to  <span><a className="nav-link" href=""> Home</a> </span></div>


              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletSignIn