import React from "react";

import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

function Footer() {
  return (
    <div
      id="#footer"
      className="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
      }}
    >
      <div className="contact__desc">
        <p>Developed and maintained by Jai Chaudhary</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          //   backgroundColor: "yellow",
          marginBottom: 40,
          marginTop: 5,

          // justifyContent: "space-evenly",
          // visibility: "hidden",
        }}
        //   className="home__social"
      >
        <a
          href="https://www.linkedin.com/in/jai-chaudhary/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilLinkedinAlt color={"var(--first-color)"} />
        </a>

        <a
          href="https://github.com/jaichaudhary"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilGithubAlt color={"var(--first-color)"} />
        </a>

        <a
          href="https://www.instagram.com/jaichaudhary___/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilInstagram color={"var(--first-color)"} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
