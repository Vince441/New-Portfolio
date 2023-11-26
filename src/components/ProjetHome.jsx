import React from "react";

function ProjetHome({ projet }) {
  return (
    <div className="Projet-Home">
<h1>PROJETS</h1>
<div className="container-cards">
      {projet.map((projets, index) => (
        <div className="Projet-cards" key={index}>
          <img src={projets.Image} />
          <div className="Projet-text-image">
            <div className={`Projet-image card-${index}`}>
              {projets.Logo ? <img src={projets.Logo} /> : ""}
            </div>

            <div className="projet-text">
              <h2>{projets.NumeroProjet}</h2>
              <h2>{projets.ProjetName}</h2>
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
    </div>
  );
}

export default ProjetHome;
