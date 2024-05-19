import React from "react";
import { Input } from "antd";

function Chrno2(props){
    return(     
<div>
    <div className="parent">
        <div className="part1">

        <h4>Erreur maximale tolérée</h4>
        <h4>Résultat: </h4>
        <p>
        <Input
        type="checkbox"
          addonBefore="Conforme"
          name="number"
          onChange={props.handleChange}
        />
        <Input
        type="checkbox"
          addonBefore=" Non conforme"
          name="number"
          onChange={props.handleChange}
        />
            
        </p>
        <p> <textarea placeholder="Observations :"></textarea>
        </p>
        <p>
<li>NB: Si l'appareil est jugé non conforme, mentionner le numéro de la non-conformité interne</li>
        <li>If the device is found to be non-compliant, state the number of the internal non-compliance</li>
</p>
        <p>
        <Input
       className="inputbalance"
          addonBefore="N° NCI:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <div className="vise">
        <div className="vis1">
      <label>Visa du contrôleur:</label>
      <img src=""/>
      </div>
      <div className="vis1">
      <label>visa du vérificateur:</label>
      <img src=""/>
      </div>
      </div>
      </p>
        </div>
    </div>
</div>
    )
}
export default Chrno2;