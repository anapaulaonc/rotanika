import logo from "./Rotanika.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> rotanika</h1>
        <div className="ana">
          <div className="card">Olá, eu sou rotanika!</div>
          <img src={logo} className="App-logo" alt="logo" />
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

export default App;
