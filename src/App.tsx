import React from "react";
import { Accordion } from "./components/Accordion/Accordion";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }} className="App">
      <Checkbox label="Task 2-1" />
      <Accordion title="Group 1" />
    </div>
  );
}

export default App;
