import React from "react";
import { Input } from "antd";
import logo from'./logo.png'
function MetU1(props){
    return(     
<div>
<div className="titre">
<div className="imgdiv"><img src={logo} className="image"/></div>
<div className="titlediv"><h1>VERIFICATION DES METRES A RUBAN </h1></div>
</div>
<div className="parent">
        <div className="part1">
            <p>
            <label >N° d'identification du mètre à ruban:</label>
            <Input 
        type="number"
        className="inputbalance"
        placeholder="Identification n°of the tape measure"
          name="number"
          onChange={props.handleChange}
        />
            </p>
            <p>
            <label >N° d'identification  du réglet étalon :</label> 
            <Input 
        type="number"
        className="inputbalance"
        placeholder=" Chronometer identification number"
          name="number"
          onChange={props.handleChange}
        />
            </p>
            <p>
            <label >N° de certificat d'étalonnage du réglet étalon:</label>
            <Input 
        type="number"
        className="inputbalance"
        placeholder=" Chronometer identification number"
          name="number"
          onChange={props.handleChange}
        />
            </p>
            <p>
            <label >Date du prochain étalonnage du réglet étalon:</label>
            <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
            </p>
            <p>
            <label >Température :</label>
            <Input 
        type="text"
        className="inputbalance"
        placeholder=" Temperatur"
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
            <label >Vérifie par: </label>
            <Input 
        type="text"
        className="inputbalance"
        placeholder=" Controlled by:"
          name="number"
          onChange={props.handleChange}
        />
            </p>
            <p>
            <label>Date de la prochaine vérification</label>
            <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
            </p>
            <p>
            <label > Indice:</label>
            <Input 
        type="text"
        className="inputbalance"
        placeholder="index"
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
  <p>
  <label>  Lisibilité des graduations sur toute la longueur du ruban:</label>
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
  <label> Contrôle de l'extrémité (côté O) non coupée et non réformée :</label>
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
  <h4>Essai de justesse :</h4>
  <p>  <label>Etendue de mesure:</label>
  <Input 
        type="number"
        className="inputbalance"
        placeholder=" Measuring range"
          name="number"
          onChange={props.handleChange}
        />
  </p>
  <p> <label>Nombre de parties à vérifier</label>
  <Input 
        type="number"
        className="inputbalance"
        placeholder="Number of parts to verify"
          name="number"
          onChange={props.handleChange}
        />
  </p>
  <p>
    <label>Longueur à vérifier:100(mm)</label>
    <label>Vc (mm) </label>
    <label>0 (mm)</label>
    <Input 
        type="number"
        className="inputbalance"
        placeholder="M 1 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 2 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 3 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 4 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 5 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Vmoy (mm)  "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Ej (mm)"
          name="number"
          onChange={props.handleChange}
        />
    <label>200 (mm)</label>
    <Input 
        type="number"
        className="inputbalance"
        placeholder="M 1 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 2 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 3 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 4 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 5 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Vmoy (mm)  "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Ej (mm)"
          name="number"
          onChange={props.handleChange}
        />
    <label>400(mm)</label>
    <Input 
        type="number"
        className="inputbalance"
        placeholder="M 1 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 2 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 3 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 4 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 5 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Vmoy (mm)  "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Ej (mm)"
          name="number"
          onChange={props.handleChange}
        />
    <label>600(mm)</label>
    <Input 
        type="number"
        className="inputbalance"
        placeholder="M 1 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 2 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 3 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 4 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 5 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Vmoy (mm)  "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Ej (mm)"
          name="number"
          onChange={props.handleChange}
        />
    <label>800(mm)</label>
    <Input 
        type="number"
        className="inputbalance"
        placeholder="M 1 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 2 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 3 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 4 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 5 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Vmoy (mm)  "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Ej (mm)"
          name="number"
          onChange={props.handleChange}
        />
    <label>1000 (mm)</label>
    <Input 
        type="number"
        className="inputbalance"
        placeholder="M 1 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 2 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 3 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 4 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="M 5 (mm) "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Vmoy (mm)  "
          name="number"
          onChange={props.handleChange}
        />
         <Input 
        type="number"
        className="inputbalance"
        placeholder="Ej (mm)"
          name="number"
          onChange={props.handleChange}
        />
  </p>

 

        </div>


        </div>
</div>
)}
export default MetU1;
