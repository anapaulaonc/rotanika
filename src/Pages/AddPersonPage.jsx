import React from "react";
import rotanika from "../Rotanika.png";
import progressBar from "../Group.svg";
import "../Styles/HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

function QuestionPage({sessionId, person}) {
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const feature = e.target[1].value;

        const data = {
            name,
            feature
        }

        axios.post(`http://127.0.0.1:8000/person/${sessionId}`, data)
        .then((res) => {
            navigate("/");
        })
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontWeight: "normal" }}> rotanika </h1>
        <div className="ana">
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="middle"> 
            <div className="card">
              Poxa, ajude-me a acertar na próxima
            </div>  
              <form onSubmit={handleSubmit}>
                  <input className="text" type="text" placeholder="Nome da pessoa que você pensou" />
                  <textarea className="text2" placeholder={`Escreva uma característica que diferencie essa pessoa do(a) ${person}`} />
                  <button className="button" type="submit">Enviar</button>
              </form>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default QuestionPage;
