import React from 'react'
import ScoreCard from './ScoreCard';
import "./Sport.css";
import BettingCard from './BettingCard';
import LiveTvSection from './LiveTvSection';

const Sport = () => {
  return (
    <div className='col-lg-10  pt-1  ' >
        <div className='row px-1'>
            <div className='col-lg-8  px-2 score-card'>
                <ScoreCard  />
                <BettingCard/>

                

            </div>
            <div className='col-4'>
                <LiveTvSection/>
            </div>

        </div>
    </div>
  )
}

export default Sport