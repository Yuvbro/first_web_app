import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Cookies from 'js-cookie';

function App() {
  const [data, setData] = React.useState(null);
  const [counter, setCounter] = React.useState(Cookies.get("counter"));

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    fetch("/increase", { method: 'PUT'})
  }, []);

  function increaseCounter() {
    fetch("/increase", { method: 'PUT'})
    setCounter(Cookies.get("counter"))
    alert("Hey you, an increase accrued")
  }

  function decreaseCounter() {
    fetch("/decrease", { method: 'PUT'})
    setCounter(Cookies.get("counter"))
    alert("Hey you, a decrease accrued")
  }

  function resetCounter() {
    fetch("/resetCounter", { method: 'PUT'})
    setCounter(Cookies.get("counter"))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading which is rare in Fiverr :) ..." : data}</p>
        <p>Counter: {Cookies.get('counter')}</p>
        <p><button className="buttons" id="increase" onClick={increaseCounter}>increase +</button>
        <button className="buttons" id="reset" onClick={resetCounter}>reset</button>
        <button className="buttons" id="decrease" onClick={decreaseCounter}>decrease -</button></p>
      </header>
    </div>
  );
}

export default App;


