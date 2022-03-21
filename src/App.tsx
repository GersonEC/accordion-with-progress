import React from "react";
import styled from "styled-components";
import { Progress } from "./components/Progress/Progress";
import { AccordionList } from "./containers/AccordionList/AccordionList";
import { useTaskGroups } from "./utilities/useTaskGroups";

function App() {
  const { totalValue } = useTaskGroups();
  return (
    <Wrapper>
      <Main>
        <Header>
          <h3>Grouped Tasks</h3>
          <Progress value={totalValue} />
        </Header>
        <AccordionList />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgb(253, 252, 252);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const Header = styled.header`
  border: solid green;
  width: 100%;
`;

const Main = styled.main`
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 500px;
  border: 10px solid red;
  gap: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow-y: auto;
`;

export default App;
