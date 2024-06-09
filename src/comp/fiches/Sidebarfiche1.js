import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Datafiche1} from "./Datafiche1";
import Navbar from "../navbar/Navbar";
import './Fiche.css';
function Sidebarfiche1() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
return (
<div className="sidefiche">
<Navbar/>
<div className="navequip">
    {Datafiche1.map((item, index) => {
    return (
      <Link  className='links' to={item.path}><button className="btnlinks">{item.icon}{item.title}</button></Link>  );})}
  </div>
</div>
 );}
export default Sidebarfiche1; 