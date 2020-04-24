import React, { FunctionComponent } from 'react';

import { getStyle } from './NumScore.style';

type NumScoreProps = {
  currentValue: number;
  maxValue?: number;
  currentValueColor?: string;
  haveBox?: boolean;
  maxValueColor?: string;
  boxColor?: string;
  className?: string;
  style?: object;
};

const NumScore: FunctionComponent<NumScoreProps> = (props) => {
  const { numScore, currentValueText, maxValueText } = getStyle(props);

  return (
    <div className={props.className} style={{ ...numScore, ...props.style }}>
      <span style={currentValueText}>{props.currentValue}</span>
      <span style={maxValueText}>{` / ${props.maxValue || 5}`} </span>
    </div>
  );
};

export default NumScore;
