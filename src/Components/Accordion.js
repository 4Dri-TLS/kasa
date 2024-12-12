import React, { useState } from "react";
import "../App.scss";
import "../Mobile.scss";

function Accordion({ data, layout = "column" }) {
  // L'état qui permet de gérer les éléments de l'accordéon qui sont ouverts
  const [openAccordions, setOpenAccordions] = useState({});

  // Activer l'état d'un élément spécifique de l'accordéon
  const toggleAccordion = (index) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Activer un accordéon spécifique
    }));
  };

  return (
    <div
      className={
        layout === "row" ? "info-row__accordion" : "info-column__accordion"
      }
    >
      {data.map((item, index) => (
        <div
          className={`${
            layout === "row"
              ? "info-row__accordion-item"
              : "info-column__accordion-item"
          } ${openAccordions[index] ? "active" : ""}`}
          key={index}
        >
          <button
            className={
              layout === "row"
                ? "info-row__accordion-header"
                : "info-column__accordion-header"
            }
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`${
                layout === "row"
                  ? "info-row__accordion-icon"
                  : "info-column__accordion-icon"
              } ${openAccordions[index] ? "rotate" : ""}`}
            ></span>
          </button>
          <div
            className={`${
              layout === "row"
                ? "info-row__accordion-content"
                : "info-column__accordion-content"
            } ${openAccordions[index] ? "open" : ""}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;