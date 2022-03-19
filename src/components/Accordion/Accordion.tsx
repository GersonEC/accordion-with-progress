import { useState } from "react";
import "./Accordion.css";

interface Props {
  title: string;
}

const Accordion: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [labelStatus, setLabelStatus] = useState<string>("Show");

  return (
    <>
      <h3>
        <button
          aria-expanded="true"
          className="Accordion-trigger"
          aria-controls="sect1"
          id="accordion1id"
          onClick={() => setToggle(!toggle)}
        >
          <span className="Accordion-title">
            {props.title}
            <span>{labelStatus}</span>
            <span className="Accordion-icon"></span>
          </span>
        </button>
      </h3>
      {toggle && (
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
