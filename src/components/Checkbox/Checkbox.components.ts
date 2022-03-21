import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input`
  width: 1rem;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, Input };
