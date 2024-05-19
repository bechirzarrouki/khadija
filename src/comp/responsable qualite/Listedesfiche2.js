import React from "react"
import './Listedesfiche2.css'

import Navmqual from "./Navqual";
function Listedesfiches2(){
    return(
<div className="ll2">
    <Navmqual/>
    <div className='recherch-fiche'>
    <div className="recherch2">
        <input type="search" placeholder='search'></input><br/>
        <button className='listbtn2'> search by Id</button>
        <button className='listbtn2' >search by type</button>
        <div className='liste2'>
        <h2>Liste des fiches remplie : </h2>
        </div>
        </div>
    </div>
</div>
    )
}
export default Listedesfiches2;
