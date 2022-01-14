import React from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import "./Projects.css";

export default function Projects() {
  const obj = [
    {
      title: "Youtube Clone",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Youtube Clone",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Youtube Clone",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Some Things I’ve Built</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="projects__div">
        {obj.map((item, index) => {
          return (
            <div className="projects__content">
              <div className="projects__overlay">
                <img
                  className="projects__overlayImg"
                  src="./img/pj1.png"
                  alt="Youtube Clone "
                  style={{
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    // height: 200,
                    // width: 300,
                  }}
                />
              </div>
              <div className="projects__overlayText ">
                <div className="projects__name">
                  <p className="projects__boldText">Youtube Clone</p>
                </div>
                <div className="projects__description">
                  <p className="projects__text">
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on Visual Studio Marketplace,
                    Package Control, Atom Package Manager, and npm.
                  </p>
                </div>

                <div className="projects__skills">
                  <div className="projects__skill">
                    <p style={{ color: "white" }} className="projects__text">
                      Html
                    </p>
                  </div>
                  <div className="projects__skill">
                    <p style={{ color: "white" }} className="projects__text">
                      Css
                    </p>
                  </div>
                  <div className="projects__skill">
                    <p style={{ color: "white" }} className="projects__text">
                      JavaScript
                    </p>
                  </div>
                  <div className="projects__skill">
                    <p style={{ color: "white" }} className="projects__text">
                      React
                    </p>
                  </div>
                </div>

                <div className="projects__link">
                  <div className="projects__linkTab">
                    <UilGithubAlt />
                  </div>
                  <div className="projects__linkTab">
                    <UilExternalLinkAlt />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="projects__overlayText ">
          <div className="projects__name">
            <p
              style={{ marginTop: 15, marginBottom: 15 }}
              className="projects__boldText"
            >
              Youtube Clone
            </p>
          </div>
          <div className="projects__description">
            <p className="projects__text">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>

          <div className="projects__skills">
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                Html
              </p>
            </div>
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                Css
              </p>
            </div>
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                JavaScript
              </p>
            </div>
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                React
              </p>
            </div>
          </div>

          <div className="projects__link">
            <div className="projects__linkTab">
              <UilGithubAlt />
            </div>
            <div className="projects__linkTab">
              <UilExternalLinkAlt />
            </div>
          </div>
        </div>
      */}
      {/* </div> */}
    </section>
  );
}
