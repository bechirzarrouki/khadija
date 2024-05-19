import React from "react";
import { Input } from "antd";
import logo from'./logo.png'
function Regl1(props){
    return(     
<div>
<div className="titre">
<div className="imgdiv"><img src={logo} className="image"/></div>
<div className="titlediv"><h1>VERIFICATION DES REGLETS</h1></div>
</div>
<div className="parent">
        <div className="part1">
        <p>
        <label>N° d'identificationn du réglet:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="  Ruler identification n°"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° d'identification  des cales étalons :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Identification n° of gauge blocks"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° de certificat d'étalonnage des cales étalons:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Calibration certificate n° of gauge blocks"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du prochain étalonnage des cales étalons:</label>
        <Input 
        type="date"
        className="inputbalance"
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
        <label>Date de la prochaine vérification:</label>
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Indice:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="Index"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N° Mode Opératoire:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="N°Instruction"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Vérifié par:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Verified by:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      </div>
      <div className="part2">
      <h4>Examen visuel et tactile</h4>
  <p>
  <label>Vérification de la présence de choc éventuel, de rayures, d'usures</label>
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
  <label> Lisibilité des graduations sur toute la longueur du ruban</label>
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
  <label> Contrôle de l'extrémité (côté 0) non coupée et non réformée</label>
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
  <h4>Essai de justesse</h4>
  <p>
        <label>Etendue de mesure:</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder="Measuring range "
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Parties à vérifier:</label>
        <Input 
        type="text"
        className="inputbalance"
        placeholder=" Parts to verify"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      </div>
      </div>
      </div>
    )}
    export default Regl1;