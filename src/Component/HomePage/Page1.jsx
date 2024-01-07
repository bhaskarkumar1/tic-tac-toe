import React from "react";
import "./Page1.css";


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function Page1() {
  // const notify = () =>
  //   toast("Invite link copied", {
  //     className: "custom-toast",
  //     toastClassName: "custom-toast-text",
  //   });


    const notify = async () => {
      try {
        // Your logic to generate the invite link
        const inviteLink = "https://www.google.comcc";
  
        // Copy the link to the clipboard
        await navigator.clipboard.writeText(inviteLink);
  
        // Show a toast notification
        // toast.success("Invite link copied!");
        toast("Invite link copied", {
          className: "custom-toast",
          toastClassName: "custom-toast-text",
        })

      } catch (error) {
        console.error("Error copying invite link:", error);
        // Show an error toast notification
        toast.error("Error copying invite link");
      }
    };
    


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

        <button className="btn-3" onClick={notify}>Invite Your Friend </button>
        <ToastContainer  
                  theme= "dark"

                  style={{ width: "400px", textAlign: "center"}} // Apply your custom styles here

        />

      </div>
      </div>

    </div>
  );
}

export default Page1;
