import React from "react";
import { Input } from "antd";
function Calibrel2(props){
    return(
        <div>
<div className="parent">
        <div className="part1">
        <h4> Erreur de fidélité</h4>
        <p>
        <Input 
        placeholder="1 (mm)"
        name="number"
        onChange={props.handleChange}
      />
      <Input
        type="text" 
        placeholder="2 (mm)"
        name="number"
        onChange={props.handleChange}
       />
       <Input
        type="text"
         placeholder="3(mm)"
         name="number"
        onChange={props.handleChange}
        />
        <Input
        type="text" 
        placeholder="4(mm)"
        name="number"
        onChange={props.handleChange}
        />
      <Input
        type="text"
         placeholder="5(mm)"
         name="number"
        onChange={props.handleChange}
        />
       <Input
        type="text" 
        placeholder="Ef= Vmax-Vmoy (mm)"
        name="number"
        onChange={props.handleChange}
        />
        </p>
        <h4>Résultat:</h4>
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
      <label>Le calibre de contrôle est conforme :</label>
      <Input
        type="checkbox"
          addonBefore="Conforme"
          name="number"
          onChange={props.handleChange}
        />
         <label>Le calibre de contrôle est réformé :</label>
        <Input
        type="checkbox"
          addonBefore=" Non conforme"
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
      <p>
        <textarea placeholder="Observations"></textarea>
      </p>
        </div>
        </div>
        </div>
    )
}
export default Calibrel2;