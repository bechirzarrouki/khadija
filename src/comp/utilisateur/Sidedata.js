import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import { PiUserListBold } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import { LuUserCog } from "react-icons/lu";
export const Sidedata = [
  {
    title : "Utilisateurs",
    path: "/users",
    icon: <FaUsersLine
     className="icondata"/>,
    cName: "sidedata",
  },
  {
    title: "Ajouter_un_utilisateur",
    path: "/Ajouter",
    icon: < FiUserPlus  
     className="icondata" />,
    cName: "sidedata",
    
  },
  {
    title: " Consulter_des_utilisateurs",
    path: "/consulteruser",
    icon: < LuUserCog className="icondata"/>,
    cName: "sidedata",
  },
  {
    title: "Listes_des_utilisateurs",
    path: "/Listedesusers",
    icon: < PiUserListBold className="icondata"/>,
    cName: "sidedata",
  },

 
];