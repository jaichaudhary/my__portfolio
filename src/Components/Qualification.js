import React, { useState } from "react";
import "./Qualification.css";
import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";

function Qualification() {
  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__wrapper">
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              onClick={() => {
                setEducation(true);
                setWork(false);
              }}
              className={
                education
                  ? "qualification__button qualification__active"
                  : "qualification__button"
              }
            >
              <UilGraduationCap size="1.8rem" className="qualification__icon" />
              Education
            </div>

            <div
              onClick={() => {
                setWork(true);
                setEducation(false);
              }}
              className={
                work
                  ? "qualification__button qualification__active"
                  : "qualification__button"
              }
            >
              <UilBriefcaseAlt size="1.8rem" className="qualification__icon" />
              Work
            </div>
          </div>

          <div className="qualification__sections"></div>
          {/*================= Qualification Content 1 ===================*/}
          {education && (
            <div className="qualification__content" data-content id="education">
              {/*================= Qualification 1 ===================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B.Tech (ECE)</h3>
                  <span className="qualification__subtitle">
                    Delhi - AIACT&R
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size="0.75rem" />
                    2018-2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/*================= Qualification 2 ===================*/}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Diploma (ECE)</h3>
                  <span className="qualification__subtitle">Delhi - GNDIT</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size="0.75rem" />
                    2015-2018
                  </div>
                </div>
              </div>

              {/*================= Qualification 3 ===================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">High School</h3>
                  <span className="qualification__subtitle">
                    Aligarh - Brilliant Public School
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size="0.75rem" />
                    2014-2015
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>
          )}
          {/*================= Qualification Content 2 ===================*/}
          {work && (
            <div className="qualification__content" data-content id="work">
              {/*================= Qualification 1 ===================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Software Developer - React JS
                  </h3>
                  <span className="qualification__subtitle">
                    Webileapps - Hyderabad
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size="0.75rem" />
                    06/2021 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/*================= Qualification 2 ===================*/}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Web Developer Intern</h3>
                  <span className="qualification__subtitle">
                    Vritrahan Technology - Gurugram
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size="0.75rem" />
                    04/2021 - 05/2021
                  </div>
                </div>
              </div>

              {/*================= Qualification 3 ===================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Intern</h3>
                  <span className="qualification__subtitle">DMRC - Delhi</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size="0.75rem" />
                    06/2018 - 07/2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
