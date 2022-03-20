import styled from "styled-components";
import { Accordion } from "../../components/Accordion/Accordion";
import Checkbox from "../../components/Checkbox/Checkbox";

const AccordionList: React.FC = () => {
  return (
    <Wrapper>
      <Accordion
        title="Group 1"
        items={
          <>
            <Checkbox label="Task 1-1" />
            <Checkbox label="Task 1-2" />
          </>
        }
      />
      <Accordion
        title="Group 2"
        items={
          <>
            <Checkbox label="Task 2-1" />
            <Checkbox label="Task 2-2" />
          </>
        }
      />
      <Accordion
        title="Group 3"
        items={
          <>
            <Checkbox label="Task 3-1" />
            <Checkbox label="Task 3-2" />
          </>
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid red;
  display: flex;
  flex-direction: column;
  width: 750px;
`;

export { AccordionList };
