import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../Data/logements.json";
import Accordion from "./Accordion";
import "../App.scss";
import "../Mobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <p>Logement not found</p>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Data for two separate accordion sections
  const accordionDataDescription = [
    {
      title: "Description",
      content: logement.description,
    },
  ];

  const accordionDataEquipments = [
    {
      title: "Équipements",
      content: (
        <ul className="noDecoration">
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="logement__container">
      <div className="logement__gallery">
        <button
          className="logement__gallery-arrow logement__gallery-arrow--left"
          onClick={handlePrevImage}
        >
          ❮
        </button>
        <img
          src={logement.pictures[currentImageIndex]}
          alt={logement.title}
          className="logement__gallery-image"
        />
        <button
          className="logement__gallery-arrow logement__gallery-arrow--right"
          onClick={handleNextImage}
        >
          ❯
        </button>
        <span className="logement__gallery-counter">
          {currentImageIndex + 1}/{logement.pictures.length}
        </span>
      </div>

      <div className="logement__info">
        <div className="logement__details">
          <h2 className="logement__title">{logement.title}</h2>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__host">
          <div className="logement__host-info">
          <p className="logement__host-name">
            {logement.host.name.split(" ")[0]} <br />
            {logement.host.name.split(" ")[1]}
          </p>
            <div
              className="logement__host-picture"
              style={{ backgroundImage: `url(${logement.host.picture})` }}
            ></div>
          </div>
          <div className="logement__rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`logement__star ${
                  i < logement.rating ? "logement__star--filled" : ""
                }`}
              >
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-wrapper">
        <div>
          <Accordion data={accordionDataDescription} layout="column"/>
        </div>
        <div>
          <Accordion data={accordionDataEquipments} layout="column"/>
        </div>
      </div>
    </div>
  );
}

export default Logement;