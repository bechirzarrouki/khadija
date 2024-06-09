import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Sidedata} from "./Sidedata";
import './Users.css';
import Navbar from "../navbar/Navbar";

function Sidebar() {
 
return (
  <div>

<div className="sidebar">
<Navbar/>
  <div className="navequip">
    {Sidedata.map((item, index) => {
    return (
      <Link className='links' to={item.path}><button className="btnlinks" >{item.icon}{item.title}</button></Link>
      );})}
  </div>
  </div> 
</div>
  );
}

export default Sidebar; 