import { useState } from "react";
import { Task } from "../../utilities/model";
import { Wrapper } from "./Checkbox.components";
interface Props {
  task: Task;
  onCheckedChange: (task: Task) => void;
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(
    props.task.checked
  );

  const onCheckedChange = (newInternalChecked: boolean) => {
    setInternalChecked(newInternalChecked);
    const newTask: Task = {
      description: props.task.description,
      value: props.task.value,
      checked: newInternalChecked,
    };
    props.onCheckedChange(newTask);
  };

  return (
    <Wrapper>
      <input
        type="checkbox"
        aria-checked={internalChecked}
        checked={internalChecked}
        onChange={() => onCheckedChange(!internalChecked)}
      />
      <span>{props.task.description}</span>
    </Wrapper>
  );
};

export default Checkbox;
