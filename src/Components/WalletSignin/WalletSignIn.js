import React, { useEffect, useState } from 'react';
import "./WalletSignIn.css";
import a from "../../Media/logo4.png"
import { useDispatch, useSelector } from 'react-redux';
import { loginUserWithWallet } from '../../Redux/Slices/walletLoginSlice';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Web3 from 'web3'

const WalletSignIn = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [account, setAccount] = useState(null)
  const [chainId, setChainId] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error } = useSelector((state) => state.walletLogin);
  const metamask = async () => {
    let isConnected = false
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            isConnected = true
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            isConnected = true
        } else {
            isConnected = false
        }
        if (isConnected === true) {
          const web3 = window.web3;
          let accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]); // Set the wallet address to the state
          }
            console.log("accounts", accounts);
            console.log("accounts0", accounts[0]);
            // setuserAddress(accounts[0])
            // console.log("accounts0Length", accounts[0].length);
            // if ( accounts[0].length > 30) {
            //     setAccount(accounts[0])
            //     setInputValue(accounts[0])   
            // }
            
            let chain = await web3.eth.getChainId()
            setChainId(chain)
            if (chain === 56) {
                // handleLogin2(accounts[0]);
            }
            window.ethereum.on('accountsChanged', async function (accounts) {
                if (account !== accounts[0]) {
                    setAccount(accounts[0])
                    // setuserAddress(account[0])
                    // setInputValue(account[0])
                }
                if (walletAddress !== accounts[0]) {
                    // console.log("[0]",account[0])
                    setWalletAddress(accounts[0])
                }
                let chain = await web3.eth.getChainId()
                setChainId(chain)
                if (chain === 56) {
                }
            })
        }
    } catch (error) {
        console.log('error message', error.message)
    }
}

useEffect(() => {
    // return () => {
        // setInputValue('')
        // setAccount('')
        metamask()
    // }
}, [])
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
   if( responce === "Wrong Wallet Address !!")
   {
    toast.error("wrong wallet address")
   }
    }
  }, [user]);
   
  useEffect(() => {
   
  }, [dispatch, walletAddress]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return ;
  // }
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
                  value={walletAddress || ''}
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