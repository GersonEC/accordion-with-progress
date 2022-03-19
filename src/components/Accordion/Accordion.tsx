import { useState } from "react";
import {
  AccordionButton,
  Title,
  Status,
  LabelStatus,
  Icon,
} from "./Accordion.components";

interface Props {
  title: string;
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
      {expanded && (
        <div
          id="sect1"
          role="region"
          aria-labelledby="accordion1id"
          className="Accordion-panel"
        >
          <div>
            <fieldset>
              <p>
                <label htmlFor="cufc1">
                  Name
                  <span aria-hidden="true">*</span>:
                </label>
                <input
                  type="text"
                  value=""
                  name="Name"
                  id="cufc1"
                  className="required"
                  aria-required="true"
                />
              </p>
              <p>
                <label htmlFor="cufc2">
                  Email
                  <span aria-hidden="true">*</span>:
                </label>
              </p>
            </fieldset>
          </div>
        </div>
      )}
    </>
  );
};

export { Accordion };
