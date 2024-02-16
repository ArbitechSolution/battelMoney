import React from 'react'
import MatchesDetail from '../MatchesDetail/MatchesDetail';
import RightSidebar from "../RightSidebar/RIghtSidebar";
import "./Home.css"


const Home = () => {
  return (
    <div className='col-lg-10 home'>
        <div className='row home p'>
        <MatchesDetail/>
        <RightSidebar/>

        </div>
       
    </div>
  )
}

export default Home