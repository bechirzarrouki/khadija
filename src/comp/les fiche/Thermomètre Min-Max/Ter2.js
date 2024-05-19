import React from "react";
import { Input } from "antd";
function Ter2(props){
    return(     
<div>
<div className="parent">
        <div className="part1">
            <h4>Essai de justesse et de fidélité</h4>
        <p>
        <label>Température minimale:</label>
        <p>
        <label>Jour 1</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc min (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi min (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Jour 2</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc min (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi min (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Jour 3</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc min (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi min (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Vmoy (°C)</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc min (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi min (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Ej=Vimoy – Vcmoy (°C)</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc min (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi min (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>j=Vimoy – Vcmoy (°C)Ef (°C)</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc min (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        </p>

       <p>
        <label>Température maximale:</label>
        <p>
        <label>Jour 1</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc max (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi  max (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Jour 2</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc max (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi max (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Jour 3</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc max (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi max (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Vmoy (°C)</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc max (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi max (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Ej=Vimoy – Vcmoy (°C)</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc max (°C) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="text"
        className="inputbalance"
        placeholder="Vi max (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>j=Vimoy – Vcmoy (°C)Ef (°C)</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Vc max (°C) "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        </p>
    <p>
        <li>Erreur maximale tolérée</li>
        <li> Maximum tolerated error = ± 3°C</li>
    </p>
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
            <label>Le thermomètre min max  </label>
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
    )}
    export default Ter2