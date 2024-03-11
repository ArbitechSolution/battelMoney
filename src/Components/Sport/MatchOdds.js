import React from 'react'

const MatchOdds = () => {
  return (
    <div>
        <div className="row  bg-dark ">
      
      <div className="Match-ods-h d-flex align-items-center">
        <p className="mx-2 mt-3 d-flex">MATCH ODS <div className='green-live-dot ms-2 mt-2'></div></p>
      </div>
      <div className="row back-lay-row  bg-dark ">
        <div className="col-7 "></div>
        <div className="col-5 ">
          <button className="back ">Back</button>
          <button className="lay ms-1">Lay</button>
        </div>
      </div>
      <div className="betting-team-info">
        <div className="row">
          <div className="col-7 betting-t-n py-2">
            <p className="ms-2 mb-0 d-flex ">
              NEW ZEELAND (<span className="favourite">favourite</span>)
            </p>
            <p className="ms-5 zero ">0</p>
          </div>
          <div className="col-5 d-flex">
            <div className="blue-bet-btn mb-0">
              <div className="d-flex flex-column align-items-center">
                1.05
                <span>000</span>
              </div>
            </div>
            <div className=" orange-bet-btn ms-1 mb-0">
              <div className="d-flex flex-column align-items-center">
                1.05
                <span>000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default MatchOdds