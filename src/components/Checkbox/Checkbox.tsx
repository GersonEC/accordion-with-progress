import { useState } from "react";
import { Wrapper } from "./Checkbox.components";
interface Props {
  label: string;
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Wrapper>
      <input
        type="checkbox"
        aria-checked={checked}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span>{props.label}</span>
    </Wrapper>
  );
};

export default Checkbox;
