import React from 'react';
import "./ChangePassword.css";
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePasswordData } from '../../Redux/Slices/updatePassSlice';
import { toast } from "react-toastify";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { isSuccess, isLoading, error } = useSelector((state) => state.updatePass);
  const token = sessionStorage.getItem("token");
  // const uid = '727681';
  const uid = sessionStorage.getItem("userData");
   // Replace with the user's UID

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePasswordData({ uid, oldPassword, newPassword, token }));
  };
  if (isLoading) {
    // return <div>Loading...</div>;
  }
  
  if (isSuccess) {
     console.log("password changed successfully", isSuccess)
    toast.success("password changed successfully")
  }
  
  if (error) {
    // return <div>Error: {error.message}</div>;
  }
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
                  <form onSubmit={handleSubmit}>
                  <div class="form-group mt-2">
                      <label for="exampleInputPassword1">Current Password*</label>
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Current Password"
                        onChange={(e)=>{setOldPassword(e.target.value)}}
                      />
                    </div>
                    <div class="form-group mt-2">
                      <label for="exampleInputPassword1">New Password</label>
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="New Password"
                        onChange={(e=>{setNewPassword(e.target.value)})}
                      />
                    </div>
                    <div class="form-group mt-2">
                      <label for="exampleInputPassword1">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder=" Confirm Password"
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