import React from 'react';

export default function StartupsNumScore({numScore: numScoreStr}: any) {
  const numScore: number = parseFloat(numScoreStr);
  let className: string;

  if (numScore < 2.5) className = 'value_small';
  else if (numScore >= 4) className = 'value_big';
  else className = 'value_middle';

  return (
    <div className={`startups-num-score startups-num-score_${className}`}>
      <span className="startups-num-score__current-value">
        {numScore}
      </span>
      <span className="startups-num-score__max-value"> / 5</span>
    </div>
  );
}