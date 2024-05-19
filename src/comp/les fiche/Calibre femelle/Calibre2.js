import React from "react";
import { Input } from "antd";
function Calibre2(props){
    return(
       <div>
        <div className="parent">
          <div className="part1">
            <h4>assage des cales et calibres:</h4>
          <p>
        <label>MESURES (Vi):</label>
        <label>1ère COTE</label>
        <Input
        type="text"
          name="number"
          placeholder="Pige Ø mm"
          onChange={props.handleChange}
        />
        <Input
        type="text"
          name="number"
          placeholder="Pige Ø mm"
          onChange={props.handleChange}
        />
      </p>
      <p>
      <label>2ère COTE</label>
        <Input
        type="text"
          name="number"
          placeholder="Pige Ø mm"
          onChange={props.handleChange}
        />
        <Input
        type="text"
          name="number"
          placeholder="Pige Ø mm"
          onChange={props.handleChange}
        />
      </p>
      <h4>Résultat :</h4>
      <p>
      <label>La Calibre femelles est :</label>
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
        <textarea placeholder="Observations :"></textarea>
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
            </div>
          </div>
       </div>
    )}
    export default Calibre2;