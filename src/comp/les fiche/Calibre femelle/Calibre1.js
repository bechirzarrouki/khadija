import React from "react";
/**  <p>
        <Input
          addonBefore="Date de la prochaine vérification :"
          name="number"
          onChange={props.handleChange}
        />
        </p> */
import { Input } from "antd";
import logo from'./logo.png'
function Calibre1(props){
    return(
       <div>
         <div className="titre">
          <div className="imgdiv"><img src={logo} className="image"/></div>
          <div className="titlediv"><h1>VERIFICATIONS DES CALIBRES FEMELLES DE CONTRÔLE DIAMETRE</h1></div>
        </div>
        <div className="parent">
          <div className="part1">
      <p>
        <label>N° du matériel contrôlé:</label>
        <Input
        type="number"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Température ambiante:</label>
        <Input
        type="number"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N°d'identification des piges cylindriques de vérification:</label>
        <Input
          type="number"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label> N°d'identification de l'étalon:</label>
        <Input
         type="number"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Numéro du certificat d'étalonnage de l'étalon :</label>
        <Input
           type="number"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
          <label>N° Mode Opératoire:</label>
        <Input
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
          <label>Indice:</label>
        <Input
          name="number"
          onChange={props.handleChange}
        />
        </p>
      <p>
        <label>Date de la prochaine vérification des piges cylindriques:</label>
        <Input
        type="date"
          name="number"
          onChange={props.handleChange}
        />
      </p>
        <p>
        <label>Date de la prochaine vérification de l'étalon :</label>
        <Input
        type="date"
          name="number"
          onChange={props.handleChange}
        />
        </p>
      
        <p>
          <label>Contrôle réalisé le:</label>
        <Input
        type="date"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p> 
          <label>Par :</label>
        <Input
          name="number"
          onChange={props.handleChange}
        />
        </p>
      
        <p>
          <label>Date de la prochaine vérification :</label>
        <Input
         type="date"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        </div>
        <div className="part2">
        <p> 
          <label>Calibre diamètre :</label>
        <Input
          type="checkbox"
          name="number"
          addonBefore="pass"
          onChange={props.handleChange}
        />
        <Input
          type="checkbox"
          name="number"
          addonBefore=" non pass"
          onChange={props.handleChange}
        />
        </p>
        <p>
          <label>Epaisseur des cales à utiliser :</label>
          <Input
          type="checkbox"
          name="number"
          addonBefore="pass"
          onChange={props.handleChange}
        />
        <Input
          type="checkbox"
          name="number"
          addonBefore=" non pass"
          onChange={props.handleChange}
        />
        </p>
      
     <h4 >Examen visuel et tactile </h4>
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
        </div>
        </div>
        
       </div>
    )

}
export default Calibre1;