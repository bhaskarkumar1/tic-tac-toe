import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Quotes.css"

function Quotes(){
    const[Quote,setQuote]=useState("Loading")


    const fetchData = async () => {
        try {
          // Make a GET request using Axios
          const response = await axios.get('https://api.adviceslip.com/advice');
            console.log(response.data.slip.advice)
            setQuote(response.data.slip.advice)
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      useEffect(()=>{
        fetchData()
        setInterval(()=>{
          fetchData()
        },60000)
      },[])
    
    return (
        <>
        <div className="outer">
            <h1>Quotes #1</h1>
            <div className="quote">
              <p>"{Quote}"</p>
            </div>
        </div>
        </>
    )
}

export default Quotes;