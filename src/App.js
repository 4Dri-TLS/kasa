import React from 'react';
import './App.scss';
import './Mobile.scss';
import Card from './Components/Card'; 

function App() {
  return (
        <main>
          <section className="hero">
            <h1 className="hero__title--desktop">Chez vous, partout et ailleurs</h1>
            <h1 className="hero__title--mobile">Chez vous,<br /> partout et ailleurs</h1>
          </section>
          <div className="parent-container">
            <Card />
          </div>
        </main>
  );
}

export default App;