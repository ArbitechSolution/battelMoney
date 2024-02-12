import React from 'react'
import "./Login.css";
import a from "../../Media/logo4.png"

const Login = () => {
  return (
    <div className='background-img'>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='card login-card bg-dark mt-5'>
                <img src="a"/>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>

</form>


            </div>
        </div>
       

    </div>
  )
}

export default Login