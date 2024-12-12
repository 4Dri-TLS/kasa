import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Logement from './Components/Logement';
import Info from './Components/Info';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound404 from './Components/NotFound404'; // Updated import
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
            <Route path="/" element={<App />} /> {/* affichage principal */}
            <Route path="/info" element={<Info />} /> {/* Page a propos */}
            <Route path="/Components/Logement/:id" element={<Logement />} /> {/* Page Logement  */}
            <Route path="*" element={<NotFound404 />} /> {/* Page 404 */}
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();