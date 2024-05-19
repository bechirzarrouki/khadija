import React from 'react';
import './Qual.css';
import Navmqual from './Navqual';
function Qual(){
    return(
<div className='quall'>
<Navmqual/>
<div className="eqmq">
<h1>Espace qualité </h1>
        <h4>Sélectionner un équipement :</h4>
        <select className="equipmentq" name="">
        <option  selected value="">choisir un equiment</option>
        <option value="Balence">Balence</option>
        <option value="Calibre femelle">Calibre femelle</option>
        <option value="Calibre luer">Calibre luer</option>
        <option value="CHronometre">CHronometre</option>
        <option value="Clés dynamomètriques">Clés dynamomètriques</option>
        <option value="Dynamomètre">Dynamomètre</option>
        <option value="Gabarits">Gabarits</option>
        <option value="Manomètre des machines d'emballage stérile">Manomètre des machines d'emballage stérile</option>
        <option value="Mètre à ruban">Mètre à ruban</option>
        <option value="Micromètre">Micromètre</option>
        <option value="Minuteur">Minuteur</option>
        <option value="Pied à coulisse">Pied à coulisse</option>
        <option value="Pige cylindrique">Pige cylindrique</option>
        <option value="Réglet">Réglet</option>
        <option value="Thermomètre des machines d'emballage stérile">Thermomètre des machines d'emballage stérile</option>
        <option value="Thermomètre Min-Max">Thermomètre Min-Max"</option>
        </select>
        <h4>Selectioner type de fiche  :</h4>
        <select className="equipmentq" name="">
        <option  selected value="">choisir type fiche</option>
        <option value="verification">verification</option>
        <option value="etalonnage">etalonnage</option>
        </select>
        <div className="boton">
        <button className="bntnq">Next</button>
        <button className="bntnqn">Exporter Fiche</button>
        </div>     
</div>

</div>
    )
}
export default Qual;