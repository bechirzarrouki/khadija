import React from "react";
import { Input } from "antd";
import logo from'./logo.png'/*      */
import './BalanceV.css';
function Balance1(props) {
  return (
    <div>
        <div className="titre">
          <div className="imgdiv"><img src={logo} className="image"/></div>
          <div className="titlediv"><h1>CONTROLE DES BALANCES</h1></div>
        </div>
        <div className="parent">
        <div className="part1">
      <p>
        <label>N° d'identification de la balance :</label>
        <Input 
        type="number"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>N° d'identification de la masse étalon :</label>
        <Input
           type="number"
           className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>N° de certificat de la masse étalon :</label>
        <Input
           type="number"
           className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
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
        <label>Température :</label>
        <Input
         className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>Humidité : </label>
        <Input
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
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Date du prochain étalonnage de la masse étalon :</label>
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
      <label>Date du prochain contrôle :</label>
      <Input
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
      />
     </p>
      <p>
        <label>Contrôle réalisé par:</label>
        <Input
           type="text"
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
      
        </p>
      </div>
      <div className="part2">
      <p>
        <p>   <Input
        type="checkbox"
          className="inputbalance"
          addonBefore="NC"
          name="id"
          onChange={props.handleChange}
        /></p>
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
    <p>
    <h4>Erreur d'indication:</h4>
    <label>Valeur nominale (Vc):</label>
        <Input
         className="inputbalance"
        placeholder="Masse N°1:"
        name="number"
        onChange={props.handleChange}
        />
    <Input
         className="inputbalance"
          placeholder="Masse N°2:"
          name="number"
          onChange={props.handleChange}
        />
    <Input 
          className="inputbalance"
        placeholder="Masse N°3:"
          name="number"
          onChange={props.handleChange}
        />
    </p>
      <p>
      <label>Valeur conventionnelle</label>
        <Input
         className="inputbalance"
        placeholder="Masse N°1:"
        name="number"
        onChange={props.handleChange}
        />
        <Input
         className="inputbalance"
          placeholder="Masse N°2:"
          name="number"
          onChange={props.handleChange}
        />
         <Input
          className="inputbalance"
        placeholder="Masse N°3:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Série 1:</label>
        <Input
        placeholder="Masse N°1:"
        className="inputbalance"
        name="number"
        onChange={props.handleChange}
        />
        <Input 
         className="inputbalance"
          placeholder="Masse N°2:"
          name="number"
          onChange={props.handleChange}
        />
         <Input
          className="inputbalance"
        placeholder="Masse N°3:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
   
      <p>
      <label>Série 2:</label>
      <Input
       className="inputbalance"
        placeholder="Masse N°1:"
        name="number"
        onChange={props.handleChange}
        />
        <Input 
         className="inputbalance"
          placeholder="Masse N°2:"
          name="number"
          onChange={props.handleChange}
        />
         <Input
          className="inputbalance"
        placeholder="Masse N°3:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>Série 3 :</label>
      <Input
       className="inputbalance"
        placeholder="Masse N°1:"
        name="number"
        onChange={props.handleChange}
        />
        <Input
         className="inputbalance"
          placeholder="Masse N°2:"
          name="number"
          onChange={props.handleChange}
        />
         <Input
          className="inputbalance"
        placeholder="Masse N°3:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>Erreur d'identification:</label>
      <Input
       className="inputbalance"
        placeholder="Masse N°1:"
        name="number"
        onChange={props.handleChange}
        />
        <Input
         className="inputbalance"
          placeholder="Masse N°2:"
          name="number"
          onChange={props.handleChange}
        />
         <Input
        className="inputbalance"
        placeholder="Masse N°3:"
          name="number"
          onChange={props.handleChange}
        />
      </p>

      </div>
      
      </div>
    </div>
  );
}

export default Balance1;
