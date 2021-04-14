import React from "react";
import ReactDOM from "react-dom";
import TextComponent from "./components/TextComponent";
import "./index.css";

const App = () => {
  return <TextComponent />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
