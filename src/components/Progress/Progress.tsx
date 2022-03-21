/* eslint-disable no-unused-vars */

import React from "react";
import { ProgressWrapper, Bar, Value } from "./Progress.components";
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
        <Value>{value.toFixed(2)}%</Value>
      </Bar>
    </ProgressWrapper>
  );
};

export { Progress };
