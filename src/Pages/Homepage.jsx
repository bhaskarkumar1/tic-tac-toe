import React from "react";
import App from "../App";
import Quotes from "../Component/Quotes/Quotes";
import Page1 from "../Component/HomePage/Page1";


function Homepage(){
    return(
            <>
            <App one={<Page1></Page1>}/>
            <Quotes></Quotes>
            </>
    )
}

export default Homepage;