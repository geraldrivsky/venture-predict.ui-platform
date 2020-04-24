import React, { FunctionComponent } from 'react';

import { Slider } from '../../visualisers';

interface AbilityScoreProps {
  score: string;
  scoreType: string;
  className: string;
}

const AbilityScore: FunctionComponent<AbilityScoreProps> = ({
  score,
  scoreType,
  className,
}) => {
  let scoreIndicator: string;

  if (scoreType === 'investment readiness') scoreIndicator = '%';
  else scoreIndicator = '/5';

  const maxValue: number = scoreType === 'investment readiness' ? 100 : 5;
  const currentValue: number = +score;
  let textLogic: string;

  if (scoreType === 'investability')
    textLogic =
      currentValue < 2.5
        ? 'needs improvement overall score'
        : currentValue >= 4
        ? 'excellent overall score'
        : 'average overall score';
  else
    textLogic =
      `${4} items to investment ready`;

  return (
    <div className={`ability-score ${className}`}>
      <div className="score-visualiser ability-score__score-visualiser">
        <span className="score-visualiser__score">{score}</span>
        <br />
        <span className="score-visualiser__indicator">{scoreIndicator}</span>
      </div>
      <p className="ability-score__ability-text">
        {scoreType === 'investability'
          ? 'YOUR INVESTABILITY SCORE'
          : 'YOUR INVESTMENT READINESS'}
      </p>
      <Slider
        className="ability-score__slider"
        currentValue={currentValue}
        maxValue={maxValue}
      />
      <p className="ability-score__text-logic">{textLogic}</p>
    </div>
  );
};

export default AbilityScore;
