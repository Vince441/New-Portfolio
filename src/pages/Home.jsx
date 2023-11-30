import React from "react";
import Presentation from "../components/Presentation.jsx";
import projet from "../components/projet.js";
import ProjetHome from "../components/ProjetHome";

export default function Home() {
  return (
    <div className="Home">
      <div className="bloc"></div>
        <div className="All">
  

<Presentation />
      <ProjetHome projet={projet} />
      
      </div>
      <div className="bloc2"></div>
      </div>
  );
}