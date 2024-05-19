/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidemetro.css';
import { Datametro } from "./Datametro";
function Sidemetro() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
return (
<div>
       <div className="navmetro">
        {Datametro.map((item, index) => {
        return (
        <li key={index} className={item.cName}><Link to={item.path}>{item.icon}
        {item.title}</Link></li>
        );
        })}
        </div>
</div>
  );
}

export default Sidemetro ; */
/*css
margin: 15px;
  color: black;
  font-size: 14px;
  position: relative;
  height: 50px;
  text-decoration: none;
  background-color:white;
  display: flex;
  align-items:center;
  text-decoration: underline;*/
  /*data
  import React from "react";
import * as AiIcons from "react-icons/ai";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GrFormFolder } from "react-icons/gr";
import { ImPrinter } from "react-icons/im";

export const Datametro = [
  {
    title: "metrologie",
    path: "/espmetro",
    icon: <AiIcons.AiFillHome className="iconmetro" />,
    cName: "metrodata",
  },
  {
    title: "List_fiche",
    path: "/liste-des-fiche",
    icon: <GrFormFolder className="iconmetro"  />,
    cName: "metrodata",
  },
  {
    title: "Imprimer_fiche",
    path: "/imprimer2",
    icon: <ImPrinter className="iconmetro"  />,
    cName: "metrodata",
  },

]; */
