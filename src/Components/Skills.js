import React from "react";
import "./Skills.css";
import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServerNetwork } from "@iconscout/react-unicons";
import { UilSwatchbook } from "@iconscout/react-unicons";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/*=====================Skills 1======================*/}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <UilBracketsCurly size="2rem" className="skills__icon" />

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">Less than a year</span>
              </div>

              <UilAngleDown size="2rem" className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/*=====================Skills 2======================*/}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <UilServerNetwork size="2rem" className="skills__icon" />

              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle">Less than a year</span>
              </div>

              <UilAngleDown size="2rem" className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__c"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node JS</h3>
                  <span className="skills__number">55%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>
            </div>
          </div>

          {/*=====================Skills 3======================*/}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <UilSwatchbook size="2rem" className="skills__icon" />

              <div>
                <h1 className="skills__title">Designer</h1>
                <span className="skills__subtitle">Less than a year</span>
              </div>

              <UilAngleDown size="2rem" className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">AdobeXD</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__adobe"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
