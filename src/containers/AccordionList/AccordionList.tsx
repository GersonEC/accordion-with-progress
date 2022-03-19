import { Accordion } from "../../components/Accordion/Accordion";
import Checkbox from "../../components/Checkbox/Checkbox";

const AccordionList: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

export { AccordionList };
