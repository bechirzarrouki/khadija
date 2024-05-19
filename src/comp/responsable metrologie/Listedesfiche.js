import React from "react"
import Navmetro from "./Navmetro";
function Listedesfiches(){
    return(
<div >
  <Navmetro/>
  <div className='nompagem'>
<p>Liste des fiches remplie:</p>
</div>
<div className="consultmetro">
           <div className='entetfiche'>
                    <p>Nom:</p>
                    <p>Type:</p>
                    <p>Date de remplissage:</p>
                    <p>Date de modéfication:</p>
                    </div>
            <div className='metrobtn'>
                <button className='btnsupprimeretconsulter'>Consulter </button>
                <button className='btnsupprimeretconsulter'>Supprimer</button>
                </div>
            </div>
</div>
    )
}
export default Listedesfiches;
