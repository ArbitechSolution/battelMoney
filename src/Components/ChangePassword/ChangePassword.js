import React from 'react';
import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="col-lg-10">
      <div className="row">
        <div className="col-12 p-1 px-2">
          <div className="funds-transfer-main-div ">
            <div className="F-h p-2 pb-0">
              <p className="ms-3">Change Password</p>
            </div>

            <div className="form-area d-flex justify-content-center align-items-center">
              <div className="card cp-card mt-4">
                

                <div className="px-4">
                  <form>
                  <div class="form-group mt-2">
                      <label for="exampleInputPassword1">Current Password*</label>
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group mt-2">
                      <label for="exampleInputPassword1">New Password</label>
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group mt-2">
                      <label for="exampleInputPassword1">Confirm Password</label>
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
  )
}

export default ChangePassword