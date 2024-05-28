import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../utilisateur/Sidebar";
function Dash(){
    return(
        <div>
            <div className="navdaash">
            <Navbar/>
            </div>
        <div className=" sidedash">
   <Sidebar/>
        </div>
            <div className='test'>
</div>
            </div>
      
    )
}
export default Dash;