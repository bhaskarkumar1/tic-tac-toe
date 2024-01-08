import React, { useState } from "react";
import "./Board.css";
function Board(){
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const addicon=((index)=>{
    // console.log("Helli")
    // console.log(event.target)
    // event.target.innerHTML= <img src="cross.png"></img>
    if (boxes[index]===null){
        const newBoxes = [...boxes];
        newBoxes[index] = <img className="div-cross" src="x.png" alt="X" />;

        setBoxes(newBoxes)

    }

    //computer turn
    // check how many boxes are having value null 
    // then get the index of null boxes and insert the O  there 

    //

   })

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
                <div className="boxes" onClick={()=>addicon(0)}> {boxes[0]}</div>
                <div className="boxes" onClick={()=>addicon(1)}>{boxes[1]}</div>
                <div className="boxes" onClick={()=>addicon(2)}>{boxes[2]}</div>

            </div>

            <div className="row2">
                <div className="boxes" onClick={()=>addicon(3)}>{boxes[3]}</div>
                <div className="boxes" onClick={()=>addicon(4)}>{boxes[4]}</div>
                <div className="boxes" onClick={()=>addicon(5)}>{boxes[5]}</div>

            </div>

            <div className="row3">
                <div className="boxes" onClick={()=>addicon(6)}> {boxes[6]}</div>
                <div className="boxes" onClick={()=>addicon(7)}>{boxes[7]}</div>
                <div className="boxes" onClick={()=>addicon(8)}>{boxes[8]}</div>

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