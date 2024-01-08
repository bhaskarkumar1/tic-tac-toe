import React from "react";

import Quotes from "../Component/Quotes/Quotes";
import App from "../App";
import Board from "../Component/Play/Board";
function Playground(){
    return(
        // <App {koll}/>
        <>
        <App one={<Board/>}/>
        <Quotes/>
        </>
    )
}

export default Playground;