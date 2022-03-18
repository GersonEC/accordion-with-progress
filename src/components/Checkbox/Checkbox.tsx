import { useState } from "react";

interface Props {
  label: string;
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <input
        type="checkbox"
        aria-checked={checked}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span>{props.label}</span>
    </>
  );
};

export default Checkbox;
