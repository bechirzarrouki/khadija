import React, { useState } from 'react';
import logonav from './logonav.png';
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { GrFormFolder } from "react-icons/gr";
import { ImPrinter } from "react-icons/im";
import { LuClipboardCheck } from "react-icons/lu";
import './Navqual.css'
function Navmqual(){
 
return(
<div>
    <div className='navmetro'>
    <img className='logonavq' src={logonav}/>
    <div className="navlink">
    <Link className='dropmenu'   to='/espqual'> <AiIcons.AiFillHome className="iconqual" />Qualité</Link>
     <Link className='dropmenu' to='/verifie'> < LuClipboardCheck className="iconqual" />Verifier_fiche</Link>
    <Link className='dropmenu' to='/liste-des-fiche2' > <GrFormFolder className="iconqual"  />List_fiche</Link>
     <Link className='dropmenu'  to='/imprimer'> <ImPrinter className="iconqual"  />Imprimer_fiche</Link>
    </div>
    </div>
</div>
    )
}
export default Navmqual;