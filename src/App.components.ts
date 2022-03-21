import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(253, 252, 252);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 70%;
  max-height: 70%;
`;

const AccordionListWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export { AccordionListWrapper, Main, Header, Wrapper };
