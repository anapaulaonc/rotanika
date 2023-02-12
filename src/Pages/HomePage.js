import React from "react";
import rotanika from "../Rotanika.png";
import "../Styles/HomePage.css";
import QuestionPage from "./QuestionPage";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontWeight: "normal" }}> rotanika </h1>
        <div className="ana">
          <div className="card">Olá, eu sou rotanika!</div>
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="card">
            Pense em um personagem real ou fictício, eu irei adivinhá-lo.
          </div>
        </div>
        <Link className="App-link" to="/question">
          Jogar
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
