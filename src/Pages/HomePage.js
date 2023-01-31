import React from "react";
import rotanika from "../Rotanika.png";
import "../Styles/HomePage.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> rotanika </h1>
        <div className="ana">
          <div className="card">Olá, eu sou rotanika!</div>
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="card">
            Pense em um personagem real ou fictício, eu irei adivinhá-lo.
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jogar
        </a>
      </header>
    </div>
  );
}

export default HomePage;
