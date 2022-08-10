import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Цей застосунок зробить магічний прорахунок всіх деталей.</p>
        <p>Просто задай габарити тумби!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Зв'язатись зі мною щоб замовити меблі або запропонувати мені роботу JS
          розробника
        </a>
      </header>
    </div>
  );
}

export default App;
