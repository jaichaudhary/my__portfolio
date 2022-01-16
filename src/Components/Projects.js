import React from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import "./Projects.css";

export default function Projects() {
  const obj = [
    {
      title: "Youtube Clone",
      description:
        "The project includes search functionality in which one can search any keyword just like youtube and get the output.",
      skills: ["HTML", "CSS", "JavaScript", "React", "YouTube API"],
      image: "youtube__image",
    },
    {
      title: "Airbnb Clone",
      description:
        "The Project includes Date Picker and how many person to stay functionality, and once you click on Done, then you are redirected to the search page.",
      skills: ["HTML", "CSS", "JavaScript", "React", "React Router"],
      image: "airbnb__image",
    },
    {
      title: "Search Pic",
      description:
        "The Project includes the functionality of image search when we type anything in the search bar and we can also view them in a modal when we click on the image, and it also has a functionality of showing recent searches.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Flickr API"],
      image: "search__pic",
    },
  ];
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Some Things I’ve Built</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="projects__div">
        {obj.map((item, index) => {
          let link = `./img/${item.image}.png`;
          return (
            <div className="projects__content">
              <div className="projects__overlay">
                <img
                  className="projects__overlayImg"
                  src={link}
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
                  <p className="projects__boldText">{item.title}</p>
                </div>
                <div className="projects__description">
                  <p className="projects__text">{item.description}</p>
                </div>

                <div className="projects__skills">
                  {item.skills.map((value, index) => (
                    <div className="projects__skill">
                      <p style={{ color: "white" }} className="projects__text">
                        {value}
                      </p>
                    </div>
                  ))}
                  {/* <div className="projects__skill">
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
                  </div> */}
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
