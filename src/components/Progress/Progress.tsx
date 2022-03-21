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
      <Bar value={value}>
        <Value>{value}%</Value>
      </Bar>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  background-color: rgb(230, 255, 220);
  margin: 0 12px;
  border-radius: 12px;
  height: 24px;
  width: 100%;
  /* trim off corners when bar is near 100% */
  overflow: hidden;
`;

const Bar = styled.div<{ value: number }>`
  position: relative;
  height: 24px;
  background-color: green;
  width: ${(props) => props.value + "%"};
  border-radius: ${(props) =>
    props.value === 100 ? "8px 8px 8px 8px" : "8px 0 0 8px"};
`;

const Value = styled.span`
  position: absolute;
  right: 0;
  top: 3px;
  width: 42px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`;

export { Progress };
