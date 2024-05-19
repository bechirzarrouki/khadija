import React from "react";
import { Input } from "antd";
function MetU2(props){
    return(     
<div>
    <div className="parent">
        <div className="part1">
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
        <p>
        <textarea placeholder="Observations :"></textarea>
        </p>
        <p>
        <label>Le mètre à ruban est</label>
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
        <p>
      <li>NB: Si l'appareil est jugé non conforme,
         mentionner le numéro de la non-conformité interne</li>
         <Input
        type="text"
          placeholder=" N° NC"
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
    )}
    export default MetU2;