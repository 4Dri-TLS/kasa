import React from "react";
import "../App.scss"; 
import "../Mobile.scss";

const NotFound404 = () => {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="home-link">Retourner sur la page d’accueil</a>
    </div>
  );
};

export default NotFound404;