import React from "react";
import { Input } from "antd";
import logo from'./logo.png'
function Min1(props){
    return(     
<div>
<div className="titre">
<div className="imgdiv"><img src={logo} className="image"/></div>
<div className="titlediv"><h1>CONTROLE DES MINUTEURS </h1></div>
</div>
<div className="parent">
        <div className="part1">
        <p>
        <label>N° d'identification de  chronomètre :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Chronometer identification number:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° d'identification du chronomètre de référence :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Identification number of the reference chronometer"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° d'identification du chronomètre:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Chronometer identification number"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° de certificat d'étalonnage du chronomètre de référence : </label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Reference chronometer calibration certificate "
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° Mode Opératoire :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" N° Instruction"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Température :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Temperature"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du prochain vérification du chronomètre de référence :</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du contrôle :</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du prochain contrôle:</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du prochain étalonnage de la masse étalon : </label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Contrôlé par ::</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Controlled by"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Indice:</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder=" index"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° d'identification du chronomètre:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Chronometer identification number"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4>Examen visuel et tactile</h4>
  <p>
  <label>Vérification de la lisibilité de l'affichage</label>
  <Input 
        type="checkbox"
        className="inputbalance" 
    addonBefore="C"
          name="number"
          onChange={props.handleChange}
        />
         <Input 
             type="checkbox"
             className="inputbalance" 
         addonBefore="C"
          name="number"
          onChange={props.handleChange}
        />
  </p>
  <p>
  <label>Nettoyage</label>
  <Input 
        type="checkbox"
        className="inputbalance" 
    addonBefore="C"
          name="number"
          onChange={props.handleChange}
        />
         <Input 
             type="checkbox"
             className="inputbalance" 
         addonBefore="C"
          name="number"
          onChange={props.handleChange}
        />
  </p>
  <p>
  <label>Contrôle du zéro</label>
  <Input 
        type="checkbox"
        className="inputbalance" 
    addonBefore="C"
          name="number"
          onChange={props.handleChange}
        />
         <Input 
             type="checkbox"
             className="inputbalance" 
         addonBefore="C"
          name="number"
          onChange={props.handleChange}
        />
  </p>
      </div>
      </div>
      </div>
      )}
      export default Min1;