import styled from "styled-components";
import { Accordion } from "../../components/Accordion/Accordion";
import Checkbox from "../../components/Checkbox/Checkbox";
import { Task } from "../../utilities/model";
import { useTaskGroups } from "../../utilities/useTaskGroups";

const AccordionList: React.FC = () => {
  const { taskGroups, setTask } = useTaskGroups();

  const handleCheckedChange = (task: Task) => {
    setTask(task);
  };

  return (
    <Wrapper>
      {taskGroups?.map((taskGroup, index) => {
        return (
          <Accordion
            key={index}
            title={taskGroup.name}
            items={taskGroup.tasks.map((task, index) => (
              <Checkbox
                key={index}
                task={task}
                onCheckedChange={handleCheckedChange}
              />
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
