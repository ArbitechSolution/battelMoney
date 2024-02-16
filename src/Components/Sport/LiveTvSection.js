import React from "react";
import { MdScreenshotMonitor } from "react-icons/md";
import { MdChecklist } from "react-icons/md";

const LiveTvSection = () => {
  return (
    <div className="px-1 d-lg-block d-none">
      <div className="TV-outer-div px-3 py-2">
        <div className="live-tv-card">
          <div className="d-flex justify-content-between tv-card pb-0 mb-0 p-1">
            <div className="d-flex mt-1 ms-1 ">
            <MdScreenshotMonitor className="tv-icon" />
            <p className="ms-2 mb-2">LIVE TV</p>

            </div>
            
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
        <div className="matched-bets mt-3">
        <div className="d-flex justify-content-between tv-card mb-0 pb-0 p-1">
            <div className="d-flex mt-1 ms-1 mb-0 ">
            <MdChecklist   className="tv-icon" />
        
            <p className="ms-2 mb-2">MATCHED BETS</p>

            </div>
            
          </div>
          <div className="bet-matches ms-2 p-2">
                AUSTRALIA VS NEWZEELAND
            </div>
            <div className="no-bets ms-1 p-2">
                NO BETS

            </div>

      </div>
      </div>
      
    </div>
  );
};

export default LiveTvSection;
