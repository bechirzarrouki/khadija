import React from "react";
import { Input } from "antd";
import './BalanceV.css';
function Balance2(props) {
  return (
    <div>
       <div className="parent">
      <div className="part2">
     
      <h4>Résultat:</h4>
      <p>
      <li>±5g pour 1000g pour les balances de pesage des matières premières et des rebus </li><br/>
      <li>Balances for raw materials and scrap ± 1g (for 1000 g) </li> <br/>
      <li>±2g pour 1 000 g pour les balances de pesage des produits et des cartons d’emballages </li><br/>
      <li>Balances for products and packaging boxes ± 2g (for 1 000 g)</li> <br/>
      <li> ±1g pour 1000g pour les balance de fabrication des ballons en silicone </li> 
      <li>Balances for silicon ballon manufacture± 1g (for 1000g) </li> 
        <label>La balance est :</label>
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
      <li>NB: Si l'appareil est jugé non conforme, mentionner le numéro de la non-conformité interne  </li>
     <li>If the device is found to be non-compliant, state the number of the internal non-compliance.</li> 
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
      <p>
        <textarea placeholder="Observations"></textarea>
      </p>
      </div>
      </div>
    </div>
   
  );
}

export default Balance2;
