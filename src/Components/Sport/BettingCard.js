import React from 'react'

const BettingCard = () => {
  return (
    <div className='row  bg-dark '>
        <div className='betting-info'>
            <button className='betting-info-btn px-2 bg-dark'>
                OPEN MARKET
            </button>
            <button className='betting-info-btn px-2 bg-dark'>
                ODDS
            </button>
            <button className='betting-info-btn px-2 bg-dark'>
                BOOKMAKER
            </button>
            <button className='betting-info-btn px-2 bg-dark'>
                 FANCY
            </button>

        </div>
        <div className='Match-ods-h d-flex align-items-center'>
            <p className='mx-2 mt-3'>MATCH ODS</p>

        </div>
        <div className='row  '>
                <div className='col-7 mb-0'>

                </div>
                <div className='col-5 mb-0 pb-0'>
                    <button className='back mb-0'>
                        Back

                    </button>
                    <button className='lay ms-1 mb-0'>
                        Lay

                    </button>

                </div>

            </div>
        <div className='betting-team-info'>
            
            <div className='row'>
                <div className='col-7 betting-t-n py-2'>
                    <p className='ms-2 mb-0 d-flex flex-column'>NEW ZEELAND (FAvourites)</p>
                    <p className='ms-5 zero '>0</p>

                </div>
                <div className='col-5 d-flex'>
                <div className='blue-bet-btn mb-0'>
                <div className='d-flex flex-column align-items-center'>
                             1.05
                             <span>000</span>
                        </div>
                        

                    </div>
                    <div className=' orange-bet-btn ms-1 mb-0'>
                    <div className='d-flex flex-column align-items-center'>
                             1.05
                             <span>000</span>
                        </div>
                       

                    </div>



                </div>

                
            </div>

        </div>


    </div>
  )
}

export default BettingCard