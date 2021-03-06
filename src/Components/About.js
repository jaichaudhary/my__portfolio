import React from "react";
import "./About.css";
import { UilDownloadAlt } from "@iconscout/react-unicons";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__wrapper">
        <div className="about__container container grid">
          <div className="about__img-parent">
            <img src="./img/about3D.svg" alt="" className="about__img" />
          </div>

          <div className="about__data">
            <p className="about__description">
              Web & Mobile developer, with good knowledge and bit of experience,
              working in web technologies and Ui/Ux design, delivering quality
              work
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title"> 1+ </span>
                <span className="about__info-name">
                  Year <br /> experience
                </span>
              </div>

              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>

              <div>
                <span className="about__info-title">02+</span>
                <span className="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a
                download=""
                href="./pdf/Jai's_Resume_Apr_2022.pdf"
                className="button button--flex"
              >
                Download CV
                <UilDownloadAlt size="1.25rem" className="button_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
