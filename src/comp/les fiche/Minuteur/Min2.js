import React from "react";
import { Input } from "antd";

function Min2(props){
    return( 
        <div className="parent">
        <div className="part1">
        <h4>Erreur maximale tolérée</h4>
        <p>
        <label>Vc (min)</label>
        <label>5 min</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="V1 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V2 (min)"
          name="number"
          onChange={props.handleChange}
        />
  <Input 
        type="text"
        className="inputbalance"
        placeholder="V3 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V4 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V5 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Vmoy (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Ej = Vmoy - Vc (min)"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>15 min</label>
      <Input 
        type="text"
        className="inputbalance"
        placeholder="V1 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V2 (min)"
          name="number"
          onChange={props.handleChange}
        />
  <Input 
        type="text"
        className="inputbalance"
        placeholder="V3 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V4 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V5 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Vmoy (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Ej = Vmoy - Vc (min)"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>30 min</label>
      <Input 
        type="text"
        className="inputbalance"
        placeholder="V1 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V2 (min)"
          name="number"
          onChange={props.handleChange}
        />
  <Input 
        type="text"
        className="inputbalance"
        placeholder="V3 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V4 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V5 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Vmoy (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Ej = Vmoy - Vc (min)"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>60 min</label>
      <Input 
        type="text"
        className="inputbalance"
        placeholder="V1 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V2 (min)"
          name="number"
          onChange={props.handleChange}
        />
  <Input 
        type="text"
        className="inputbalance"
        placeholder="V3 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V4 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V5 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Vmoy (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Ej = Vmoy - Vc (min)"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>90 min</label>
      <Input 
        type="text"
        className="inputbalance"
        placeholder="V1 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V2 (min)"
          name="number"
          onChange={props.handleChange}
        />
  <Input 
        type="text"
        className="inputbalance"
        placeholder="V3 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V4 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="V5 (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Vmoy (min)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="text"
        className="inputbalance"
        placeholder="Ej = Vmoy - Vc (min)"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <li>Erreur maximale tolérée</li>
       <li> Maximum tolerated error = ± 2min/ 60 min</li> 
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
        <div className="part2">

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
    )}
    export default Min2  