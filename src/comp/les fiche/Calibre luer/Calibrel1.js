import React from "react";
import { Input } from "antd";
import logo from'./logo.png'
import chema from './chema.png';
function Calibrel1(props){
    return(
        <div>
            <div className="titre">
          <div className="imgdiv"><img src={logo} className="image"/></div>
          <div className="titlediv"><h1>VERIFICATIONS DES CONES LUERS  </h1></div>
        </div>
        <div className="parent">
        <div className="part1">
        <p>
        <label>N° du matériel contrôlé:</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="N° of controlled material :"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Température ambiante:</label>
        <Input 
        
        className="inputbalance"
        placeholder="Ambient temperature:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>N°d'identification de l'étalon :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder="N°identification of the stallion"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label>Numéro du certificat d'étalonnage du micromètre étalon  :</label>
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" Calibration Certificate number of the stallion:"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label> Date de la prochaine vérification de l'étalon</label> 
      <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
      </p>
      <p>
        <label >N° Mode Opératoire </label> 
        <Input 
        type="number"
        className="inputbalance"
        placeholder=" "
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label  >Contrôle réalisé le </label> 
        <Input 
        type="text"
        className="inputbalance"
        placeholder=""
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label  >par </label> 
        <Input 
        type="text"
        className="inputbalance"
        placeholder=" by:"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Date de la prochaine vérification </label> 
        <Input 
        type="date"
        className="inputbalance"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <h4>Détail cône luer </h4>
        <p>
        <img src={chema}/>
        </p>
        <h4>Examen visuel et tactile :</h4>
        <p>
        <label>Contrôle de l'origine  </label>
        <Input 
        type="checkbox"
        className="inputbalance"
        placeholder="C"
          name="number"
          onChange={props.handleChange}
        />
   <Input 
        type="checkbox"
        className="inputbalance"
        placeholder="NC"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label>Rayures, chocs, déformation, etc…  </label>
        <Input 
        type="checkbox"
        className="inputbalance"
        placeholder="C"
          name="number"
          onChange={props.handleChange}
        />
   <Input 
        type="checkbox"
        className="inputbalance"
        placeholder="NC"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <p>
        <label> Nettoyage  </label>
        <Input 
        type="checkbox"
        className="inputbalance"
        placeholder="C"
          name="number"
          onChange={props.handleChange}
        />
   <Input 
        type="checkbox"
        className="inputbalance"
        placeholder="NC"
          name="number"
          onChange={props.handleChange}
      
        />
        </p>
        <h4>Erreur de justesse : </h4>
        <p>
        <label>MESURES (Vi)</label> 
        <Input 
        type="number"
        className="inputbalance"
        placeholder="1 (mm)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="number"
        className="inputbalance"
        placeholder="2 (mm)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="number"
        className="inputbalance"
        placeholder="3 (mm)"
          name="number"
          onChange={props.handleChange}
        />
          <Input 
        type="number"
        className="inputbalance"
        placeholder="4 (mm)"
          name="number"
          onChange={props.handleChange}
        />
        </p>
        <h4>Résultat: </h4>
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
    
            
          
        </div>
</div>
        </div>
    )
}
export default Calibrel1;