import { useEffect, useState } from "react";
import styled from "styled-components";
import { Accordion } from "../../components/Accordion/Accordion";
import Checkbox from "../../components/Checkbox/Checkbox";
import { TaskGroup } from "../../utilities/model";

const AccordionList: React.FC = () => {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[] | null>(null);

  useEffect(() => {
    const setGroups = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
      );
      const data = await response.json();
      setTaskGroups(data);
    };
    setGroups();
  }, []);

  return (
    <Wrapper>
      {taskGroups?.map((taskGroup) => {
        return (
          <Accordion
            key={taskGroup.name}
            title={taskGroup.name}
            items={taskGroup.tasks.map((task) => (
              <Checkbox key={task.description} label={task.description} />
            ))}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
`;

export { AccordionList };
