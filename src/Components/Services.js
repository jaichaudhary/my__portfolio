import React, { useState } from "react";
import "./Services.css";
import { UilWebGrid } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrow } from "@iconscout/react-unicons";
import ServiceModal from "./Common/ServiceModal";
import { UilPen } from "@iconscout/react-unicons";

export default function Services() {
  const [modalState, setModalState] = useState(null);
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div
          className="services__content"
          onClick={() => {
            setModalState(0);
          }}
        >
          <div>
            <UilWebGrid className="services__icon" />
            <h3 className="services_title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More <UilArrowRight className="button__icon" />
          </span>
          {modalState === 0 && (
            <ServiceModal
              headFirst={"Ui/Ux"}
              headLast={"Designer"}
              serviceArr={[
                "I develop the user interface.",
                "Web page development.",
                "I create ux element interactions.",
                "I position your company brand.",
              ]}
              onTap={(value) => {
                if (value) {
                  setTimeout(() => {
                    setModalState(null);
                  }, 100);
                }
              }}
            />
          )}
        </div>
        <div
          className="services__content"
          onClick={() => {
            setModalState(1);
          }}
        >
          <div>
            <UilArrow className="services__icon" />
            <h3 className="services_title">
              Frontend <br /> Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More <UilArrowRight className="button__icon" />
          </span>
          {modalState === 1 && (
            <ServiceModal
              headFirst={"Frontend"}
              headLast={"Developer"}
              serviceArr={[
                "I develop the user interface.",
                "Web page development.",
                "I create ux element interactions.",
                "I position your company brand.",
              ]}
              onTap={(value) => {
                if (value) {
                  setTimeout(() => {
                    setModalState(null);
                  }, 100);
                }
              }}
            />
          )}
        </div>
        <div
          className="services__content"
          onClick={() => {
            setModalState(2);
          }}
        >
          <div>
            <UilPen className="services__icon" />
            <h3 className="services_title">
              Backend <br /> Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More <UilArrowRight className="button__icon" />
          </span>
          {modalState === 2 && (
            <ServiceModal
              headFirst={"Backend"}
              headLast={"Developer"}
              serviceArr={[
                "I develop the user interface.",
                "Web page development.",
                "I create ux element interactions.",
                "I position your company brand.",
              ]}
              onTap={(value) => {
                if (value) {
                  setTimeout(() => {
                    setModalState(null);
                  }, 100);
                }
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
