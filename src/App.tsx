import React from "react";
import styled from "styled-components";
import { Progress } from "./components/Progress/Progress";
import { AccordionList } from "./containers/AccordionList/AccordionList";

function App() {
  return (
    <Wrapper>
      <Main>
        <h3>Grouped Tasks</h3>
        <Progress value={100} />
        <AccordionList />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: lightgray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 16px;
`;

export default App;
