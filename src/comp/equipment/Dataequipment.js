import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlinePicRight } from "react-icons/ai";
export const Dataequipment = [
  {
    title : "Equipments",
    path: "/equipment",
    icon: <AiOutlineAppstore
     className="icondata"/>,
    cName: "sidedata",
  },
  {
    title: "Ajouter_un_équipment",
    path: "/Ajouterequipment",
    icon: < AiOutlineAppstoreAdd 
     className="icondata" />,
    cName: "sidedata",
    
  },
  {
    title: " Consulter_les_équipments",
    path: "/consultequipment",
    icon: <  AiOutlinePicRight  className="icondata"/>,
    cName: "sidedata",
  },
 

 
];