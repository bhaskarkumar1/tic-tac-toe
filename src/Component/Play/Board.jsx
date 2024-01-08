import React from "react";
import "./Board.css";
function Board(){
    return(
        <>
        <div className="wrapper">
            
        <div className="outer-container">
            <div className="header">

                <div className="first">
                <img src="./cross.png" alt="" />
                <img src="./circle.png" alt="" />
                </div>
                <div className="turn"> 
                <img src="./wcross.png" alt="" />              
                 {/* <img src="./turn.png" alt="" /> */}
                 <span>TURN</span>
                </div>

                <div className="retry">
                    <img src="./retry.png" alt="" />
                    </div>


            </div>
        <div className="grid">

            <div className="row1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>

            </div>

            <div className="row2">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>

            </div>

            <div className="row3">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>

            </div>
        </div>

        <div className="bottom">
            <button className="x">X (YOU)  <br />   0</button>
            <button className="ties">TIES  <br />   0</button>
            <button className="o">O (CPU)  <br />   0</button>
        </div>

        </div>
        
        </div>

        </>
    )
}

export default Board;