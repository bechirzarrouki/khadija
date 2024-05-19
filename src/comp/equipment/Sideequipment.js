import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Dataequipment} from "./Dataequipment";
import './Equipment.css';
import Navbar from "../navbar/Navbar";
function Sideequipment() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
return (
  <div>

<div className="sidebar">
<Navbar/>
  <div className="navequip">
    {Dataequipment.map((item, index) => {
    return (
      <Link className="links" to={item.path}> <button className="btnlinks">{item.icon}{item.title}</button></Link>);})}
  </div>
  </div> 
</div>
  );
}

export default Sideequipment; 