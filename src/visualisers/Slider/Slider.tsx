import React, { FunctionComponent } from 'react';

import { getStyle } from './Slider.style';

interface SliderProps {
  currentValue: number;
  maxValue?: number;
  className?: string;
  containerColor?: string;
  color?: string;
  width?: number;
  height?: number;
  boxShadow?: boolean;
}

const Slider: FunctionComponent<SliderProps> = (props) => {
  const { slider, sliderChild } = getStyle(props);
  return (
    <div className={props.className} style={slider}>
      <div style={sliderChild}></div>
    </div>
  );
};

export default Slider;
