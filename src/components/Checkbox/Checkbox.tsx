import { useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <CheckboxStyled
        type="checkbox"
        aria-checked={checked}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span>{props.label}</span>
    </>
  );
};

const CheckboxStyled = styled.input`
  border: solid red;
  &:checked {
    border: solid red;
  }
`;

export default Checkbox;
