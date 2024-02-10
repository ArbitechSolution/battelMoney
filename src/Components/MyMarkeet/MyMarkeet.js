import React from 'react'
import "./MyMarkket.css"

const MyMarkeet = () => {
  return (
    <div className='col-lg-10'>
      <div className='row'>
        <div className='col-12 p-3'>

            <div className='bet-h '>
                <h4 className='p-2 ms-2'>Matched Bet</h4>
                <div className='d-flex justify-content-between '>
                    <div className='bd'>
                        <p className='ms-2 mt-2'>
                            MATCH
                        </p>

                    </div>
                    <div className='bd d-flex align-items-center'>
                        <p className='ms-2 mt-2'>GAME TYPE</p>

                    </div>
                    <div className='bd'>
                        <p className='ms-2 mt-2'>BET FOR</p>

                    </div>
                    <div className='bd'>
                        <p className='ms-2 mt-2'>ODDS</p>

                    </div>
                    <div className='bd'>
                        <p>ODDS</p>

                    </div>
                    <div className='bd'>
                        <p className='ms-2 mt-2'>STAKE</p>

                    </div>
                    <div className='bd'>
                        <p className='ms-2 mt-2'>PROFIT</p>

                    </div>

                </div>
                <div className='record p-2'>
                    <h6>NO RECORD!!!</h6>
                </div>
                
            </div>


        </div>

      </div>
        </div>
  )
}

export default MyMarkeet