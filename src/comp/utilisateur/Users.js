import React from "react";
import Sidebar from "./Sidebar";
import'./Users.css'
function User(){
    return(
        <div>
            <Sidebar/>
            <div className='nompage'>
                <p> Utilisateurs :</p>
            </div>
            <div className="users" >
<p>dernier user ajouter  </p>
<p>dernier user modifier  </p>
<p>dernier user supprimer </p>
            </div>
        </div>
    )
}
export default User ;