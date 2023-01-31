import React from "react";
import rotanika from "../Rotanika.png";
import progressBar from "../Group.svg";
import "../Styles/HomePage.css";

function QuestionPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> rotanika </h1>
        <div className="ana">
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="card">O seu personagem é ... ?</div>
          <img src={progressBar} className="App-logo" alt="ProgressBar" />
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

export default QuestionPage;
