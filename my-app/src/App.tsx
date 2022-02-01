import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Board } from "@biscuitnick/react-biscuit";
// const { Board } = Biscuits;
// import { Board } from "@biscuitnick/react-biscuit";
// import type { Board } from "@biscuitnick/react-biscuit/dist/index";

function App() {
  return (
    <div className="App">
      <Button label={"nick"} />
      <Board width={50} height={50} />
    </div>
  );
}

export default App;
