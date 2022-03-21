import React from "react";
import { Progress } from "./components/Progress/Progress";
import { AccordionList } from "./containers/AccordionList/AccordionList";
import { useTaskGroups } from "./utilities/useTaskGroups";
import { Wrapper, Main, Header, AccordionListWrapper } from "./App.components";

function App() {
  const { totalValue } = useTaskGroups();
  return (
    <Wrapper>
      <Main>
        <Header>
          <h3>Grouped Tasks</h3>
          <Progress value={totalValue} />
        </Header>
        <AccordionListWrapper>
          <AccordionList />
        </AccordionListWrapper>
      </Main>
    </Wrapper>
  );
}

export default App;
