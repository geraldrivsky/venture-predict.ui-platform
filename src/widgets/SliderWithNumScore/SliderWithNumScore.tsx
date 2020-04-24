import React, { FunctionComponent } from 'react';
import { Slider, NumScore } from '../../visualisers';
import { Colors } from '../../Styles';

interface Props {
  text: string;
  score: string;
  withBackground?: boolean;
  numScoreMaxValueColor?: string;
  className?: string;
}

const SliderWithNumScore: FunctionComponent<Props> = ({
  text,
  score,
  numScoreMaxValueColor = Colors.VP_SILVER,
  withBackground = false,
  className = ''
}) => {
  const parentClasses: string[] = ['slider-with-num-score', className];

  if (withBackground)
    parentClasses.push('slider-with-num-score_with-background');

  return (
    <div className={parentClasses.join(' ')}>
      <p className="p-s-13 p-s-13_bold slider-with-num-score__text">{text}</p>
      <Slider
        width={80}
        className="slider-with-num-score__slider"
        currentValue={+score}
      />
      <NumScore
        maxValueColor={numScoreMaxValueColor}
        className="slider-with-num-score__num-score"
        currentValue={+score}
      />
    </div>
  );
};

export default SliderWithNumScore;
