import React, { useState } from 'react';
import logonav from './favicon (1).png';
import { AiOutlineAppstore } from "react-icons/ai";
import { FaUsersLine } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { VscGear } from "react-icons/vsc";
import './Navbar.css';
function Navbar(){
return(
<div >
<div className='navbar'>
    <img className='logonav' src={logonav} />
    <div className='navicons'>
    <p>Prince Médicale Industry </p>
    <Link to='/notif' className='iconsnav'><IoNotifications  className='notif'/></Link>
    <Link to='/config' className='iconsnav'>< VscGear    className='config'/></Link>
    </div>
    <div className="navlink">
    <Link to='/Ajouter' className='dropmenu'  > <FaUsersLine className='icons' /> Utilisateurs </Link>
    <Link to='/Ajouter-fiche' className='dropmenu' >  < SiGoogleforms className='icons'  /> Fiches </Link>
    <Link to='/Ajouterequipment' className='dropmenu' > <AiOutlineAppstore  className='icons' /> Equipment</Link>
    <Link to='/'><button  id='btnlogout' >Logout</button></Link>
    </div>
    
</div>

</div>
    )
}
export default Navbar;