import React from "react";
import { Input } from "antd";
import logo from'./logo.png'
function Chrno1(props){
    return(     
<div>
<div className="titre">
<div className="imgdiv"><img src={logo} className="image"/></div>
<div className="titlediv"><h1>VERIFICATION DES CHRONOMETRES </h1></div>
</div>
<div className="parent">
        <div className="part1">
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
        <label>Température :</label>
        <Input 
        type="text"
        className="inputbalance" 
        placeholder=" Temperature:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>N° d'identification du chronomètre de référence  :</label>
        <Input 
        type="number"
        className="inputbalance" 
        placeholder=" Identification number of the reference chronometer" 
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>N° de certificat t d'étalonnage du chronomètre de référence : </label>
        <Input 
        type="number"
        className="inputbalance" 
        placeholder=" Reference chronometer calibration certificate n°"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label >Date de la prochaine vérification du chronomètre de référence : </label>
        <Input 
        type="date"
        className="inputbalance" 
        placeholder=" Temperature:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      
      <label>N° Mode Opératoire : </label>
        <Input 
        type="numbre"
        className="inputbalance" 
        placeholder="N° Instruction" 
          name="number"
          onChange={props.handleChange}
        />
        
      </p>
      <p>
      <label >Indice : </label>
        <Input 
        type="text"
        className="inputbalance" 
        placeholder="index"
          name="number"
          onChange={props.handleChange}
        />
        
      </p>
      <p>
      <label >Date de vérification : </label>
      <Input 
        type="date"
        className="inputbalance" 
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label >Date de la prochaine vérification :</label>
      <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p> <label >Vérification réalisée par: </label>
      <Input 
        type="text"
        className="inputbalance" 
        placeholder=" Verified by:"
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
<label>Contrôle du zéro:</label>
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
<label> Nettoyage :</label>
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
<h4>Essai de justesse/</h4>
<p>
<label>Vc(s)</label>
<Input
                type="text"
             className="inputbalance" 
       placeholder="V1 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
            type="text"
             className="inputbalance" 
       placeholder="V2 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V3 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V4 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V5 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
               type="text"
             className="inputbalance" 
       placeholder="Vmay (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="Ej = Vmoy - Vc (s)"
          name="number"
          onChange={props.handleChange}
        />
</p>
<p>
<label>10s</label>
<Input
                type="text"
             className="inputbalance" 
       placeholder="V1 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
            type="text"
             className="inputbalance" 
       placeholder="V2 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V3 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V4 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V5 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
               type="text"
             className="inputbalance" 
       placeholder="Vmay (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="Ej = Vmoy - Vc (s)"
          name="number"
          onChange={props.handleChange}
        />
</p>
<p>
<label>15s</label>
<Input
                type="text"
             className="inputbalance" 
       placeholder="V1 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
            type="text"
             className="inputbalance" 
       placeholder="V2 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V3 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V4 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V5 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
               type="text"
             className="inputbalance" 
       placeholder="Vmay (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="Ej = Vmoy - Vc (s)"
          name="number"
          onChange={props.handleChange}
        />
</p>
<p>
<label>30s</label>
<Input
                type="text"
             className="inputbalance" 
       placeholder="V1 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
            type="text"
             className="inputbalance" 
       placeholder="V2 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V3 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V4 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V5 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
               type="text"
             className="inputbalance" 
       placeholder="Vmay (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="Ej = Vmoy - Vc (s)"
          name="number"
          onChange={props.handleChange}
        />
</p>
<p>
<label>60s</label>  
<Input
                type="text"
             className="inputbalance" 
       placeholder="V1 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
            type="text"
             className="inputbalance" 
       placeholder="V2 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V3 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V4 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="V5 (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
               type="text"
             className="inputbalance" 
       placeholder="Vmay (s)"
          name="number"
          onChange={props.handleChange}
        />
        <Input
             type="text"
             className="inputbalance" 
       placeholder="Ej = Vmoy - Vc (s)"
          name="number"
          onChange={props.handleChange}
        />
</p>


      </div>
        </div>
        </div>
    )
}
export default Chrno1;