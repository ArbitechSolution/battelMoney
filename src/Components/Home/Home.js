import React from 'react'
import MainArea from '../MatchesDetail/MatchesDetail';
import RightSidebar from "../RightSidebar/RIghtSidebar";
import "./Home.css"


const Home = () => {
  return (
    <div className='col-lg-10 home'>
        <div className='row home position-relative'>
        <MainArea/>
        <RightSidebar/>

        </div>
       
    </div>
  )
}

export default Home