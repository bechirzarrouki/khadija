import React from "react";
import'./Equipment.css'
import Sideequipment from "./Sideequipment";
function User(){
    return(
        <div>
            <Sideequipment/>
            <div className='nompage'>
                <p>Equipments :</p>
            </div>
            <div className="users" >
<p>dernier equipment ajouter  </p>
<p>dernier  equipment modifier  </p>
<p>dernier  equipment supprimer </p>
            </div>
        </div>
    )
}
export default User ;