import React from "react";
import { Accordion } from "./components/Accordion/Accordion";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }} className="App">
      <Accordion
        title="Group 1"
        items={
          <>
            <Checkbox label="Task 2-1" />
            <Checkbox label="Task 2-2" />
          </>
        }
      />
    </div>
  );
}

export default App;
