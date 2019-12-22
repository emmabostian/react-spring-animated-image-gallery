import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./Gallery";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
