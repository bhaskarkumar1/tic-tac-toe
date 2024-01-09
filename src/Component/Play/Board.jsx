import React, { useState } from "react";
import "./Board.css";


let data=["","","","","","","","",""]

function Board(){

  
        let[count,setCount]=useState(0)
        let[lock,setLock]=useState(false) //whenever the user wins set the lock to true

        const addicon=(e,num)=>{
            if (lock){
                return 0;
            }
            if(count%2===0){
                e.target.innerHTML=`<img className="cross-x" src='x.png'>`
                data[num]='x'
                setCount(++count)
            }
            else{
                e.target.innerHTML=`<img className="circle-o" src='o.png'>`
                data[num]='o'
                setCount(++count)

            }
            checkwin()
        }


        const checkwin=()=>{
            if (data[0]===data[1] && data[1]===data[2] && data[2]!==""){
                won(data)
            }
            else if (data[3]===data[4] && data[4]===data[5] && data[5]!==""){
                won(data)
            }
            else if (data[6]===data[7] && data[7]===data[8] && data[8]!==""){
                won(data)
            }
            else if (data[0]===data[3] && data[3]===data[6] && data[6]!==""){
                won(data)
            }
            else if (data[1]===data[4] && data[4]===data[7] && data[7]!==""){
                won(data)
            }
            else if (data[2]===data[5] && data[5]===data[8] && data[8]!==""){
                won(data)
            }
            else if (data[0]===data[4] && data[4]===data[8] && data[8]!==""){
                won(data)
            }
            else if (data[2]===data[4] && data[4]===data[6] && data[6]!==""){
                won(data)
            }
        }
    

        const won=(winner)=>{
            setLock(true)
        }
  


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
                <div className="boxes" onClick={(e)=>addicon(e,0)}> </div>
                <div className="boxes" onClick={(e)=>addicon(e,1)}></div>
                <div className="boxes" onClick={(e)=>addicon(e,2)}></div>

            </div>

            <div className="row2">
                <div className="boxes" onClick={(e)=>addicon(e,3)}></div>
                <div className="boxes" onClick={(e)=>addicon(e,4)}></div>
                <div className="boxes" onClick={(e)=>addicon(e,5)}></div>

            </div>

            <div className="row3">
                <div className="boxes" onClick={(e)=>addicon(e,6)}> </div>
                <div className="boxes" onClick={(e)=>addicon(e,7)}></div>
                <div className="boxes" onClick={(e)=>addicon(e,8)}></div>

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