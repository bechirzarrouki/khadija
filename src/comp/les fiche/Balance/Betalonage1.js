import React from "react";
import { Input } from "antd";
import logo from'./logo.png'/*    addonBefore="C"   */
import './BalanceV.css';
function Betalonage(props) {
    return(
        <div>
            <div className="titre">
          <div className="imgdiv"><img src={logo} className="image"/></div>
          <div className="titlediv"><h1>Fiche d'étalonnage des balances</h1></div>
        </div>
        <div className="parent">
        <div className="part1">
        <h4>Identification de l'instrument </h4>
        <p>
            <label>Désignation : </label>
        <Input 
        readOnly
         type="text"
         placeholder="Balance"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Marque</label>
        <Input 
         type="text"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>N° d'identification : </label>
        <Input 
         type="text"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Type:</label>
        <Input 
        readOnly
         type="text"
         placeholder="Numérique"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4> Caractéristique technique de l'instrument:</h4>
      <p>
            <label>Portée maximale en g:</label>
        <Input 
         type="text"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Résolution à vide d0 
en g:</label>
        <Input 
         type="text"
         placeholder="No-load resolution d0
         in g"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Résolution en charge den g:</label>
        <Input 
         type="text"
         placeholder="Resolution in charge of in g"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>e en g:</label>
        <Input 
         type="text"
         placeholder="e in g"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Coefficient de sensibilité:</label>
        <Input 
         type="text"
         placeholder="/Coefficient of sensitivity °C"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>EMT en g/1kg:</label>
        <Input 
         type="text"
         placeholder="EMT in g/1kg"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4> Raccordement des poids étalons:</h4>
      <p>
            <label>N° d'identification des masses étalons:</label>
        <Input 
         type="number"
         placeholder="Identification number of standard messes"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Date d'étalonnage des masses étalons:</label>
        <Input 
         type="date"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>N° certificat d'étalonnage des masses étalons:</label>
        <Input 
         type="number"
         placeholder="Calibration certificate number of standard messes"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label>Date du prochain étalonnage:</label>
        <Input 
         type="date"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4>Conditions environnementales ( 20±2 °C):</h4>
      <p>
            <label>Température (° C):</label>
        <Input 
         type="number"
         placeholder="Min"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
           <Input 
         type="number"
         placeholder="Max"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4> Conditions opératoires:</h4>
      <p>   
          <label>N° Mode Opératoire :</label>
        <Input
           type="number"
           className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
            <label> Version:</label>
        <Input 
         type="number"
         placeholder="verision "
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4>Examen visuel</h4>
      <p>
        <label>Contrôle de l'origine:</label>
        <Input
          type="checkbox"
          className="inputbalance"
          addonBefore="C"
          name="id"
          onChange={props.handleChange}
        />
         <Input
        type="checkbox"
          className="inputbalance"
          addonBefore="NC"
          name="id"
          onChange={props.handleChange}
        />
        </p>
        <p>
      <label> Rayures, chocs, déformation...:</label>
      <Input
        type="checkbox"
          className="inputbalance"
          addonBefore="C"
          name="id"
          onChange={props.handleChange}
        />
         <Input
        type="checkbox"
          className="inputbalance"
          addonBefore="NC"
          name="id"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label> Nettoyage:</label>
      <Input
        type="checkbox"
          className="inputbalance"
          addonBefore="C"
          name="id"
          onChange={props.handleChange}
        />
         <Input
        type="checkbox"
          className="inputbalance"
          addonBefore="NC"
          name="id"
          onChange={props.handleChange}
        />
      </p>
      <h4> Détermination de l'erreur d'indication:</h4>
      <p> 
        <label>Valeur nominale:</label>
        <Input 
         type="number"
         placeholder="Nominal value (g) "
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p> 
        <label>lValeur conventionnelle:</label>
        <Input 
         type="number"
         placeholder="Conventional value (Vc) (g)"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p> 
        <label>Indications lues Vi sous charges croissantes:</label>
        <Input 
         type="number"
         placeholder="/Indications Vi under increasing loads(g)"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p> 
        <label>Indications lues Vi sous charges décroissantes:</label>
        <Input 
         type="number"
         placeholder="Indications Vi under decreasing loads (g)"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>Erreur Ei sous charges croissantes:</label>
        <Input 
         type="number"
         placeholder="error Ei under increasing loads(g)"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>Erreur Ei sous charges décroissante:</label>
        <Input 
         type="number"
         placeholder="error Ei under decreasing loads(g)"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>Modélisation:</label>
        <Input 
         type="number"
         placeholder="a"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
         type="number"
         placeholder="b"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
        <Input 
         type="number"
         placeholder="valeur"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
         type="number"
         placeholder="div"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <h4> Détermination de l'erreur de fidélité:</h4>
      <label></label>
      <p>  <Input 
         type="number"
         placeholder="div"
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        /></p>

        </div>
        </div>

        </div>
    )
}
export default Betalonage;