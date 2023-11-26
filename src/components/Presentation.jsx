import React from "react";
import Typewriter from "typewriter-effect";
import ExperienceList from "./ExperienceList";
import experiences from "../components/data";

export default function Presentation() {
  return (
    <div className="Coucou-presentation">

      <div className="centrer-container">
        <div className="first-part">
        <div className="texteAndLogo">
          <div className="texte-nom-presentation">
          <div className="Coucou">
            <p>Vincent Louvart de Pontlevoye</p>

            <section>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(50)
                    .typeString(
                      '<span style="color: #3c7b99">DEV FRONT-END</span><span style="color: #F1F1F1"> !</span>'
                    )
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #61DBFB">REACT</span><span style="color: #F1F1F1"> !</span>'
                    )
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #539e43">Node.js</span><span style="color: #F1F1F1"> !</span>'
                    )
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #00758F">My</span><span style="color: #F29111">SQL</span><span style="color: #F1F1F1"> !</span>'
                    )
                    .pauseFor(300)
                    .deleteAll()
                    .typeString(
                      '<span style="color:#3c7b99">DEV FRONT-END</span> <span style="color: #F1F1F1">!</span>'
                    )
                    .start();
                }}
              />
            </section>
          </div>
          <p className="text-presentation">
            Ancien étudiant en PAO, je désire utiliser mes compétences de mise
            en page au service du web.
            <br />
            Je suis actuellement en formation à la <span>
              Wild Code School
            </span>{" "}
            en tant que Développeur Web & Mobile front-end junior.
          </p>
          </div>
          
         
          <div className="container-logo">
          <h1>COMPETENCES</h1>
            <div className="Logo-competence">
                <img src="./logo-competence/html-5.png" alt="" />
                <img src="./logo-competence/css-3.png" alt="" />
                <img src="./logo-competence/js.png" alt="" />
                <img src="./logo-competence/react.png" alt="" />
                <img src="./logo-competence/adobe-illustrator.png" alt="" />
                <img src="./logo-competence/adobe-photoshop.png" alt="" />
                <img src="./logo-competence/adobe-indesign.png" alt="" />
                <img src="./logo-competence/figma.png" alt="" />
                <img src="./logo-competence/github-white.png" alt="" />
                <img src="./logo-competence/logo-git.png" alt="" />
                <img src="./logo-competence/vscode.png" alt="" />
                <img src="./logo-competence/mySQL.png" alt="" />

            </div>
          </div>
        </div>
        </div>
        <div className="scd-part">
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
