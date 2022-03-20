/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";

const Progress = ({ value }: { value: number }) => {
  console.log({ value });
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/*<VisuallyHidden>{value} %</VisuallyHidden>*/}
      <Bar value={value} />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  background-color: lightgreen;
  margin: 0 12px;
  border-radius: 12px;
  height: 20px;
  width: 100%;
  /* trim off corners when bar is near 100% */
  overflow: hidden;
`;

const Bar = styled.div<{ value: number }>`
  height: 20px;
  background-color: green;
  border-radius: ${(props) =>
    props.value === 100 ? "8px 8px 8px 8px" : "8px 0 0 8px"};
`;

export { Progress };
