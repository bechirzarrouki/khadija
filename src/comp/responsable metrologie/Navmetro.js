import React, { useState } from 'react';
import logonav from './favicon (1).png';
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { GrFormFolder } from "react-icons/gr";
import { ImPrinter } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import './Navmetro.css'
function Navmetro(){
 
  
return(
<div>
    <div className='navmetro'>
    <img className='logonav' src={logonav} />
    <div className='navicons'>
    <p>Prince Médicale Industry </p>
    </div>
    <div className="navlink">
    <Link className='dropmenu'   to='/espmetro'> <AiIcons.AiFillHome className="iconmetro" />Métrologie</Link>
    <Link className='dropmenu' to='/liste-des-fiche' > <GrFormFolder className="iconmetro"  />List_fiche</Link>
    <Link to='/notif' className='iconsnav'><IoNotifications  className='notif'/></Link>
    </div>
    </div>
</div>
    )
}
export default Navmetro;