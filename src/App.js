import logo from "./logo.svg";
import "./App.css";
import Button from "./button";
import MInput from "./mInput";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState(0);

  const addClick = () => {
    setList(list + 1);
    // console.log("list", list);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="description">
            Цей застосунок дозволяє робити проекти з розрахунком деталювання
            кухонних меблів
          </p>
          <span className="special">
            Вибирай комплект з готових стандартних модулів або просто задай
            габарити тумби!
          </span>
          <a className="App-link" href="tel:+380664652112">
            Зв'язатись зі мною щоб замовити меблі або запропонувати мені роботу
            JS розробника
          </a>
        </header>
      </div>
      <MInput />
      <Button onClick={addClick} />
    </>
  );
}

export default App;
