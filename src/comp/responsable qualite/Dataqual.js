/*import React from "react";
import * as AiIcons from "react-icons/ai";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GrFormFolder } from "react-icons/gr";
import { ImPrinter } from "react-icons/im";
import { LuClipboardCheck } from "react-icons/lu";

export const Dataqual = [
  {
    title: "Qualité",
    path: "/espqual",
    icon: <AiIcons.AiFillHome />,
    cName: "sidedata",
  },
  {
    title: "Verifier_fiche",
    path: "/verifie",
    icon: < LuClipboardCheck  />,
    cName: "sidedata",
  },
  {
    title: "Liste_fiche",
    path: "/liste-des-fiche2",
    icon: <GrFormFolder />,
    cName: "sidedata",
  },
  {
    title: "Imprimer_fiche",
    path: "/imprimer",
    icon: <ImPrinter />,
    cName: "sidedata",
  },

];*/
/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import './Sidequal.css';
import { Dataqual } from "./Dataqual";
function Sidemetro() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
return (
<div>
<IconContext.Provider value={{ color: "black" }}>
        <div className="sidebar">
        <Link to="#" className="menu-bars"><FaIcons.FaBars onClick={showSidebar} /></Link>
        </div>
        <nav className={sidebar ? "nav-menu activeq" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-toggle"><Link to="#" className="menu-bars"><AiIcons.AiOutlineClose /></Link>
        </li>
        {Dataqual.map((item, index) => {
        return (
        <li key={index} className={item.cName}><Link to={item.path}>{item.icon}
        <span>{item.title}</span></Link></li>
        );
        })}
        </ul>
        </nav>
</IconContext.Provider>
</div>
  );
}

export default Sidemetro ; */ 
/*.sidebar {
    margin-top: 20px;
    background-color:transparent;
    height: 80px;
  width: 80px;
  }
  
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: transparent;
    color: white;
  }
  
  .nav-menu {
    background-color:transparent;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }
  
  .nav-menu.activeq {
    left: 0;
    transition: 450ms;
    margin-top: 0px;
  }
  
  .sidedata{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }
  
  .sidedata a {
    text-decoration: none;
    color:black;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  
  .sidedata a:hover {
    background-color:black;
    color:black;
  }
  
  .nav-menu-items {
    width: 100%;
  }
  
  .navbar-toggle {
    background-color:transparent;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  span {
    margin-left: 16px;
  }
   */