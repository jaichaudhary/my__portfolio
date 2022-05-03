import React, { useState } from "react";
import "./Navbar.css";
import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";

function NavbarList(props) {
  return (
    <React.Fragment>
      <li className="nav__item">
        <a
          href={props.navLink__id}
          className="nav__link"
          onClick={() => {
            props.setIsNavToggle(!props.isNavToggle);
          }}
        >
          <div className="nav__icon">
            {props.navLink__id === "#home" && <UilEstate />}
            {props.navLink__id === "#about" && <UilUser />}
            {props.navLink__id === "#skills" && <UilFileAlt />}
            {props.navLink__id === "#services" && <UilBriefcaseAlt />}
            {props.navLink__id === "#portfolio" && <UilScenery />}
            {props.navLink__id === "#contact" && <UilMessage />}
          </div>
          {props.navLink__name}
        </a>
      </li>
    </React.Fragment>
  );
}

function Navbar({ inView }) {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const color = "white";
  // const [isNavLink , setIsNavLink] = useState(false);

  const handleClick = () => {
    console.log(!isNavToggle);
    setIsNavToggle(!isNavToggle);
  };

  //array__navList
  const navLink__name = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Portfolio",
    "Contactme",
  ];
  const navLink__id = [
    "#home",
    "#about",
    "#skills",
    "#services",
    "#portfolio",
    "#contact",
  ];

  const iteration = [0, 1, 2, 3, 4, 5];

  return (
    <header
      style={{
        "--nav-color": inView && color,
        "--nav-back-color": inView && "#5935e1",

        //not dynamic
        "--nav-option-color": !inView && "white",
        // "--nav-option-color": !inView && "white",
      }}
      className="header"
      id="header"
    >
      <nav className="nav container">
        <a href="#jai" className="nav__logo">
          Jai
        </a>
        <div
          className={`nav__menu ${isNavToggle ? "show__menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {iteration.map((num) => {
              return (
                <NavbarList
                  key={navLink__id[num]}
                  navLink__id={navLink__id[num]}
                  navLink__name={navLink__name[num]}
                  setIsNavToggle={setIsNavToggle}
                  isNavToggle={isNavToggle}
                />
              );
            })}
          </ul>
          <UilTimes
            id="nav-close"
            className="nav__close"
            onClick={handleClick}
          />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" onClick={handleClick} id="nav-toggle">
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
