import React from "react";
import "./Page1.css";

function Page1() {
  return (
    <div className="page1">
      <div className="inner-pg-1">
        <div className="icons">
          <img className="cross" src="src/assets/cross.png" alt="" />
          <div className="circle">
            <img className="ccircle" src="src/assets/circle.png" />
          </div>
        </div>

        <div className="upper">
          <h1>PICK PLAYERS</h1>

          <div className="container">
              <img className="wcross" src="src/assets/wcross.png" alt="" />
              <div className="right-part">
                <img  className="bo" src="src/assets/bo.png" alt="" />
              </div>


          </div>


        </div>
        <div className="lower">
        <button className="btn">NEW GAME( VS CPU )</button>
        <button className="btn btn-2">
          
          NEW GAME ( VS HUMAN ) Coming soon
        </button>

        <button className="btn-3">Invite Your Friend </button>
      </div>
      </div>

    </div>
  );
}

export default Page1;
