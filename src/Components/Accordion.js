import React, { useState } from 'react';
import '../App.scss';
import '../Mobile.scss';

function Accordion({ data, layout = 'column' }) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index); // Toggle current accordion
  };

  return (
    <div className={layout === 'row' ? 'info-row__accordion' : 'info-column__accordion'}>
      {data.map((item, index) => (
        <div
          className={`${layout === 'row' ? 'info-row__accordion-item' : 'info-column__accordion-item'} ${
            openAccordionIndex === index ? 'active' : ''
          }`}
          key={index}
        >
          <button
            className={
              layout === 'row'
                ? 'info-row__accordion-header'
                : 'info-column__accordion-header'
            }
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`${
                layout === 'row' ? 'info-row__accordion-icon' : 'info-column__accordion-icon'
              } ${openAccordionIndex === index ? 'rotate' : ''}`}
            ></span>
          </button>
          <div
            className={`${
              layout === 'row'
                ? 'info-row__accordion-content'
                : 'info-column__accordion-content'
            } ${openAccordionIndex === index ? 'open' : ''}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;