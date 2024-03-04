import React from "react";
import { useState,useEffect } from "react";
import "./Login.css";
import a from "../../Media/logo4.png";
import { fetchIP, selectIP } from '../../Redux/Slices/ipSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Slices/authSlice';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
const Login = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ip = useSelector(selectIP);
  const { user, isLoading, } = useSelector(state => state.auth)
  console.log(ip);

  useEffect(() => {
    dispatch(fetchIP());
  }, [dispatch]);
  // const encryptdata = async (payload) => {
  //   try {
  //     let res;
  //     let response = await axios.get("https://battlemoney-auth-api.nakshtech.info/getPublicKey");
  //     let publicKey = response.data.publicKey;
  //     if (publicKey) {
  //       const data = JSON.stringify(payload);

  //       const textBuffer = new TextEncoder().encode(data);

  //       // Convert base64 publicKey to Uint8Array
  //       const binaryString = window.atob(publicKey);
  //       const len = binaryString.length;
  //       const bytes = new Uint8Array(len);
  //       for (let i = 0; i < len; i++) {
  //         bytes[i] = binaryString.charCodeAt(i);
  //       }

  //       const cryptoKey = await window.crypto.subtle.importKey(
  //         "spki",
  //         bytes,
  //         {
  //           name: "RSA-OAEP",
  //           hash: "SHA-256",
  //         },
  //         true,
  //         ["encrypt"],
  //       );
  //       const encryptedData = await window.crypto.subtle.encrypt(
  //         {
  //           name: "RSA-OAEP",
  //         },
  //         cryptoKey,
  //         textBuffer,
  //       );
  //       // Convert encryptedData to base64
  //       const base64EncryptedData = btoa(
  //         String.fromCharCode(...new Uint8Array(encryptedData)),
  //       );

  //       return base64EncryptedData;
  //     }
  //   } catch (e) {
  //     console.log("encrypt Api error:", e);
  //   }
  // };
  const submitLogin = (e)=>{

      e.preventDefault();
      // let body = encryptdata({
      //   username: UserName,
      //   password: UserName,
      //   ipaddress: ip,
      // });
       dispatch(loginUser({ username: UserName, password: password, ipaddress: ip }))
      
       
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
    toast.success("Logged In Successfully")
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
    console.log("Is Loading:", isLoading);
  }, [isLoading]);

  // useEffect(() => {
  //   console.log("Error:", error);
  // }, [error]);
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
