import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import '../Mobile.scss';
import logements from '../Data/logements.json';

function Card() {
  return (
    <div className="location__grid">
      {logements.map((element) => (
        <Link to={`/Components/Logement/${element.id}`} key={element.id}>
          <div className="location__card">
            <img className="location__card-image" src={element.cover} alt={element.title} />
            <p className="location__card-title">{element.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;