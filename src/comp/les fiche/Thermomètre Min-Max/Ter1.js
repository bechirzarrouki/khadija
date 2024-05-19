import React from "react";
import { Input } from "antd";
import logo from'./logo.png'
function Ter1(props){
    return(     
<div>
<div className="titre">
<div className="imgdiv"><img src={logo} className="image"/></div>
<div className="titlediv"><h1>VERIFICATION DES REGLETS</h1></div>
</div>
<div className="parent">
        <div className="part1">
        <p>
        <label>N° d'identification du thermomètre min max:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Min max thermometer identification n°"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° d'identification du thermomètre min max étalon :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Identification number of the standard min max thermometer"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° de certificat d'étalonnage du thermomètre min max étalon:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="N° of calibration certificate for standard min max thermometer"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du prochain étalonnage du thermomètre min max étalon:</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Température:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Temperatur"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date de vérification:</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Contrôlé par: </label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Controlled by:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date de la prochaine vérification:</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
    </div>
    <div className="part2">
    <h4>Examen visuel et tactile</h4>
  <p>
  <label> Vérification de la lisibilité de l'affichage</label>
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
  <label>Vérification de remise à zéro</label>
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
  <label> Nettoyage</label>
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

    export default Ter1;