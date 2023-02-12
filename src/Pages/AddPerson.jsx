import React from "react";
import rotanika from "../Rotanika.png";
import progressBar from "../Group.svg";
import "../Styles/HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

function AddPersonPage() {
  const [name, setName] = useState("");
  const [sessionId, setSessionId] = useState(0);
  const [feature, setFeature] = useState("");
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

        // data = e.target.value;

        // axios.post(`http://127.0.0.1:8000/person/${sessionId}`, data)
        // .then((res) => {
        //     navigate("/");
        // })
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1> rotanika </h1>
        <div className="ana">
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="card">
            Poxa, ajude-me a acertar na próxima
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Escreva uma característica que diferencie esse pessoa da Wandinha" />
            </form>
          </div>
          <img src={progressBar} className="App-logo" alt="ProgressBar" />
        </div>
      </header>
    </div>
  );
}

export default AddPersonPage;
