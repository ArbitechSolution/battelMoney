import React from "react";
import { useState,useEffect } from "react";
import "./Login.css";
import a from "../../Media/logo4.png";
import { fetchIP, selectIP } from '../../Redux/Slices/ipSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Slices/authSlice';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ip = useSelector(selectIP);
  const { user, isLoading, error } = useSelector(state => state.auth)
  console.log(ip);

  useEffect(() => {
    dispatch(fetchIP());
  }, [dispatch]);
  const submitLogin = (e)=>{

      e.preventDefault();
      dispatch(loginUser({ username: UserName, password: password, ipaddress: ip }))
      console.log("User:", user.data.result);
    let responce = user.data.result
   console.log("res", responce);
   if(responce === "Successfull"){
    toast.success("Successfull")
    navigate("/")
    console.log("loggedin")
   }
   else{
    toast.error("wrong username of password")
   }
  }
   
  

  useEffect(() => {
    console.log("Is Loading:", isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log("Error:", error);
  }, [error]);
  return (
    <div className="background-img">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card login-card  mt-5">
          <div className="d-flex justify-content-center mt-4">
            <img className="img-fluid img-div" src={a} alt="a" />
          </div>

          <div className="px-4">
            <form onSubmit={submitLogin}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className=" login-input p-1 px-2"
                  id="exampleInputEmail1"
                  placeholder="Enter UserName"
                  aria-describedby="emailHelp"
                  onChange={(e)=>{setUserName(e.target.value)}}

                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password*
                </label>
                <input
                  type="password"
                  className=" login-input p-1 px-2"
                  placeholder="Enter your password"
                  id="exampleInputPassword1"
                  onChange={(e)=>{setPassword(e.target.value)}}
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
  );
};

export default Login;
