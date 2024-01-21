import logo from "./logo.svg";
import "./App.css";
import Hook from "./Hook";
import FunctionalComponent from "./01_useState/FunctionalComponent";
import LazyInitialization from "./01_useState/LazyInitialization";
import WhatIsTheUseEffect from "./02_useEffect/WhatIsTheUseEffect";
import HowToUseUseEffect from "./02_useEffect/HowToUseUseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>useState 5분만에 종결하기</h1>
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

      <FunctionalComponent />

      <LazyInitialization />

      <WhatIsTheUseEffect />

      <HowToUseUseEffect />
    </div>
  );
}

export default App;
