import React from "react";
import rotanika from "../Rotanika.png";
import progressBar from "../Group.svg";
import "../Styles/HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function QuestionPage({ sessionId, setSessionId, setPerson }) {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [progress, setProgress] = useState("0%");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/start").then((response) => {
      setSessionId(response.data.session_id);
      setQuestion(response.data.question.question);
    });
  }, []);

  const handleAnswer = (event) => {
    axios
      .post(`http://127.0.0.1:8000/answer/${sessionId}`, {
        answer: event.target.value,
      })
      .then((response) => {
        if (response.data.done) {
          setPerson(response.data.question);
          navigate("/guess");
        }
        const percentage = response.data.progress * 100;
        setProgress(`${percentage.toFixed(2)}%`);
        setQuestion(response.data.question);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontWeight: "normal" }}> rotanika </h1>
        <div className="ana">
          <img src={rotanika} className="App-logo" alt="Rotanika" />
          <div className="middle">
            <div className="card">O seu personagem é {question}?</div>
            <div className="collum">
              <button className="button" onClick={handleAnswer} value={1}>
                Sim
              </button>
              <button className="button" onClick={handleAnswer} value={-1}>
                Nao
              </button>
              <button className="button" onClick={handleAnswer} value={0}>
                Nao sei
              </button>
            </div>
          </div>
          {/* <img src={progressBar} className="App-logo" alt="ProgressBar" /> */}
        </div>
        <div
          className="progress-bar"
          style={{
            backgroundImage: `linear-gradient(90deg, #FFFFFF ${progress}, rgba(255, 255, 255, 0) ${progress})`,
          }}
        ></div>
      </header>
    </div>
  );
}

export default QuestionPage;
