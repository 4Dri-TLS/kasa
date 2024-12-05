import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Logement from './Components/Logement'; 
import Info from './Components/Info'; 
import Header from './Components/Header'; 
import Footer from './Components/Footer'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app">
      <div className="app__container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<App />} /> {/* Affichage principal : */}
            <Route path="/info" element={<Info />} /> {/* page à propos */}
            <Route path="/Components/Logement/:id" element={<Logement />} /> {/* Page logement */}
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();