import React from "react";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import "./StakeSetting.css";

const StakeSettingModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div className="modal-container" onClick={closeModal}></div>
      <div className="modal-body rounded-2">
        <div className="card modal-card p-2">
          <div className="d-flex justify-content-between p-2 h-div">
            <p className="modal-p">Chips Setting</p>
            <button onClick={closeModal} className="cross-btn">
              <ImCross className="cross-icon" />
            </button>
          </div>
          <div className="row">
            <div className="col-6 p-2">
              <form>
                <div class="form-group ">
                  <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                  <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                  <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                </div>
                <div class="form-group">
                <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                </div>
                <div class="form-group">
                <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                </div>

               
              </form>
            </div>
            <div className="col-6 p-2">
              <form>
                <div class="form-group">
                <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                  <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                </div>
                <div class="form-group">
                  
                  <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                </div>
                <div class="form-group">
                <input
                    type="text"
                    className=" mt-2 modal-input"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="12"
                  />
                </div>

                
              </form>
              

            </div>
            <div className="update-div mt-1 d-flex justify-content-end">
                <button className="btn btn-primary mt-2">Update</button>

              </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modalPortlContainer")
  );
};

export default StakeSettingModal;
