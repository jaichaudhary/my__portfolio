import React from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import "./ServiceModal.css";

export default function ServiceModal({
  headFirst,
  headLast,
  serviceArr,
  onTap = () => {},
}) {
  return (
    <div className="services__modal">
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {headFirst} <br /> {headLast}
        </h4>
        <div
          className="services__modal-close"
          onClick={() => {
            onTap(true);
          }}
        >
          <UilTimes />
        </div>

        <ul className="services__modal-services grid"></ul>
        <li className="services__modal-service">
          <UilCheckCircle className="services__modal-icon" />
          <p>{serviceArr[0]}</p>
        </li>
        <li className="services__modal-service">
          <UilCheckCircle className="services__modal-icon" />
          <p>{serviceArr[1]}</p>
        </li>
        <li className="services__modal-service">
          <UilCheckCircle className="services__modal-icon" />
          <p>{serviceArr[2]}</p>
        </li>
        <li className="services__modal-service">
          <UilCheckCircle className="services__modal-icon" />
          <p>{serviceArr[3]}</p>
        </li>
      </div>
    </div>
  );
}
