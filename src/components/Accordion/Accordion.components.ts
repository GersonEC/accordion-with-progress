import styled from "styled-components";

const AccordionButton = styled.button`
  display: flex;
  border: 1px solid lightgray;
  border-bottom: none;
  background-color: rgba(255, 255, 255, 1);
  min-width: 750px;
  width: 750px;
  height: 60px;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: gray;
`;

const LabelStatus = styled.span`
  color: gray;
  opacity: 0.8;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.span<{ expanded: boolean }>`
  font-size: 1.6rem;
  color: gray;
  opacity: 0.8;
  margin-bottom: ${(props) => (!props.expanded ? "12px" : "-10px")};
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  min-width: 722px;
  width: 722px;
  border: 1px solid lightgray;
  border-top: none;
`;

export { AccordionButton, Icon, Status, LabelStatus, Title, Fieldset };
