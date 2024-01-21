import logo from "./logo.svg";
import "./App.css";
import Hook from "./Hook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>리액트 훅 정복하기</h1>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCJoqs9hXVD2gdZusrhSRN9A"
          target="_blank"
          rel="noopener noreferrer"
        >
          with Code King Academy
        </a>
      </header>

      <Hook />
    </div>
  );
}

export default App;
