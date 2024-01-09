import React,{useState} from "react";
import "./App.css"

// import Page1 from "./Component/HomePage/Page1";

function App(props){

  const[user,setUser]=useState("x")

  return(
    <>
    <div className="app">
      {props.one}
      {/* {user={user}} */}

      
    </div>
    
    </>



  )
}

export default App;