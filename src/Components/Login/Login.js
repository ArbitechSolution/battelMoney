import React from "react";
import "./Login.css";
import a from "../../Media/logo4.png";

const Login = () => {
  return (
    <div className="background-img">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card login-card  mt-5">
          <div className="d-flex justify-content-center mt-4">
            <img className="img-fluid img-div" src={a} alt="a" />
          </div>

          <div className="px-4">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  User Name
                </label>
                <input
                  type="email"
                  className=" login-input p-1 px-2"
                  id="exampleInputEmail1"
                  placeholder="Enter UserName"
                  aria-describedby="emailHelp"
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
