import React from 'react';
import './Metro.css';
import Navmetro from'./Navmetro';
import Imprimer2 from './Imprimer2'
function Metro(){
return(
<div className='metro'>
<Navmetro/>
<div className='nompagem'>
<p>Espace métrologie :</p>
</div>
<div className="remplirfichee">
                <p>Sélectionner un équipement : </p>
                <select className="selectfiche" name="">
                <option  selected value="">Choisir un équipement:</option>
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
                <p>Sélectionner type de fiche :</p>
                <select className="selectfiche" name="">
                <option  selected value="">choisir type fiche</option>
                <option value="verification">verification</option>
                <option value="etalonnage">etalonnage</option>
                </select><br/>
                <button className="btnremplirfiche">Next</button>
                <button className="btnremplirfiche">Exporter Fiche</button>
            
                
        </div>
</div>
    )
}
export default Metro;