import { useState } from "react";
import {
  AccordionButton,
  Title,
  Status,
  LabelStatus,
  Icon,
  Fieldset,
} from "./Accordion.components";

interface Props {
  title: string;
  items: React.ReactNode;
}

const Accordion: React.FC<Props> = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [labelStatus, setLabelStatus] = useState<"Show" | "Hide">("Show");

  const handleIconCick = () => {
    setLabelStatus(labelStatus === "Show" ? "Hide" : "Show");
    setExpanded(!expanded);
  };

  return (
    <>
      <AccordionButton onClick={() => handleIconCick()}>
        <Title>{props.title}</Title>
        <Status>
          <LabelStatus>{labelStatus}</LabelStatus>
          <Icon expanded={expanded}>{labelStatus === "Show" ? "⌄" : "⌃"}</Icon>
        </Status>
      </AccordionButton>
      {expanded && <Fieldset>{props.items}</Fieldset>}
    </>
  );
};

export { Accordion };
