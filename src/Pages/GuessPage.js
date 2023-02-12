import React from "react";
import rotanika from "../Rotanika.png";
import progressBar from "../Group.svg";
import lamp from "../lamp.png";
import "../Styles/HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GuessPage({ person }) {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontWeight: "normal" }}> rotanika </h1>
        <div className="ana">
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="middle">
            <div className="card-guess">Eu acho que você pensou em...</div>
            <div className="character">{person}</div>

            <div className="row">
              <Link class to="/">
                <button className="button">Acertou</button>
              </Link>
              <Link class to="/">
                <img className="lamp" src={lamp} alt="Rotanika" />
              </Link>
              <Link to="/add-person">
                <button className="button">Errou</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default GuessPage;
