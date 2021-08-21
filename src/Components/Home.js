import React from "react";
import UserSvgImg from "./UserSvgImg.js";
import "./Home.css";
// import Blob from "./Blob.js";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilMouseAlt } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/jai-chaudhary-960a1b205"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilLinkedinAlt />
            </a>

            <a
              href="https://github.com/jaichaudhary"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilGithubAlt />
            </a>

            <a
              href="https://www.instagram.com/jaichaudhary___/"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilInstagram />
            </a>
          </div>

          {/*<Blob />*/}
          <UserSvgImg className="home__blob" />

          <div className="home__data">
            <h1 className="home__title">Hi, I'am Jai</h1>
            <h3 className="home__subtitle">Frontend developer</h3>
            <p className="home__description">
              Experience in web design and development knowledge, producing
              quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <UilMessage size="1.25rem" className="button__icon" />
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll--button button--flex">
            <UilMouseAlt size="2rem" className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <UilArrowDown size="1.25rem" className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
