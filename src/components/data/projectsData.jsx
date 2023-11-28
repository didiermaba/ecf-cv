import assosPix from "../../../public/assets/img/assos.jpg";
import carPix from "../../../public/assets/img/supakar.png";
import portPix from "../../../public/assets/img/portfolioDWWM.png";

export const projectsData = [
  {
    id: 1,
    title: "Wote Pamodja",
    date: "Janvier 2020",
    languages: ["Html", "CSS", "Php", "Javascript", "MySQL"],
    infos:
      "Une Association à but non lucratif régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour titre Association Woté Pamodja.",
    img: assosPix,
    link: "http://maba.alwaysdata.net/index.php",
  },
  {
    id: 2,
    title: "Supakar",
    date: "Vovembre 2023",
    languages: ["Html", "Css", "React"],
    infos:
      "Une application créée dans le cadre d'un exercice et test au deploiement pour la mise en production.",
    img: carPix,
    link: "https://superkart-1wuzs2ccu-didiers-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    date: "Avril 2023",
    languages: ["Html", "Css", "Javascript"],
    infos: "Il s'agit de mon portfolio DWWM crée en Html, Css et Javascript .",
    img: portPix,
    link: "https://didiermaba.github.io/PortFolioJs/",
  },
];
