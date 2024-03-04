import React, { useEffect, useState } from 'react';
import "./WalletSignIn.css";
import a from "../../Media/logo4.png"
import { useDispatch, useSelector } from 'react-redux';
import { loginUserWithWallet } from '../../Redux/Slices/walletLoginSlice';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WalletSignIn = () => {
  const [walletAddress, setWalletAddress] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error } = useSelector((state) => state.walletLogin);
  const walletLogin = (e)=>{
    e.preventDefault();
    const walletRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletRegex.test(walletAddress))
      return toast.error("Invalid wallet address");
    dispatch(loginUserWithWallet(walletAddress));


  }
  useEffect(() => {
    if (user) {
      // Fetch additional data or perform actions based on user state
      console.log("User state updated:", user);
      console.log("User:", user);
      // console.log(JSON.stringify(user.data.data))
    let responce = user.data.result
   console.log("res", responce);
   if(responce === "Successfull"){
    toast.success("Successfull")
    let userdata = user.data.resultid;
    let token = user.token;
    console.log("token", token)
    sessionStorage.setItem("token", token )

    console.log("userdataID", userdata);
    sessionStorage.setItem('userData', user.data.resultid);
    navigate("/")
    console.log("loggedin")
   }
   else{
    toast.error("wrong username of password")
   }
    }
  }, [user]);
   
  useEffect(() => {
   
  }, [dispatch, walletAddress]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="background-img">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card wallet-card  mt-5">
          <div className="d-flex justify-content-center mt-4">
            <img className="img-fluid img-div" src={a} alt="a" />
          </div>

          <div className="px-4">
            <form onSubmit={walletLogin}>
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
                  onChange={(e)=>{setWalletAddress(e.target.value);}}
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