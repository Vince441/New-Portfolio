import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleShowMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  // const handleCloseMenu = () => {
  //   setShowMenu(false);
  // };

  // function determineActive({ isActive }) {
  //   if (isActive === true) {
  //     return "active";
  //   } else {
  //     return "";
  //   }
  // }

  return (
    <>
      <div className="Navbar">
        <div className="reseaux-hamb">
        <div className="reseaux">
          <a href="https://www.linkedin.com/">
            <span className="reseau-1">
              <img src="./Linkedin.png" alt="Linkedin" />
            </span>
          </a>
          <a href="https://www.linkedin.com/">
            <span className="reseau-2">
              <img src="./git-white.png" alt="GitHub" />
            </span>
          </a>
        </div>
{/* 
        <div className="container-menu">
          <button className="hamburger" onClick={handleShowMenu}>
            <img src="./hamburger.png" />
          </button>
          <div className={showMenu ? "menu" : "hide-menu"}>
            <NavLink
              to="/"
              className={determineActive}
              onClick={handleCloseMenu}
            >
              ACCUEIL
            </NavLink>
            {/* <NavLink
              to="Présentation"
              className={determineActive}
              onClick={handleCloseMenu}
            >
              PRESENTATION
            </NavLink> */}
            {/* <NavLink
              to="Projet"
              className={determineActive}
              onClick={handleCloseMenu}
            >
              PROJET
            </NavLink> */}
            {/* <NavLink
              to="Contact"
              className={determineActive}
              onClick={handleCloseMenu}
            >
              CONTACT
            </NavLink> */}
          {/* </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
