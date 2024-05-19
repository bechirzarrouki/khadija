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

];