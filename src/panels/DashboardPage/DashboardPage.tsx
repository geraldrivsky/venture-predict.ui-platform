import React, { FunctionComponent, useRef, useEffect } from 'react';

import { AbilityScore } from '../../widgets';
import {
  CardNamePageFollowers,
  CardNamePageViews,
  Sharing,
  CardNameGraph,
} from '../../assets/svgs';

interface CardNamePageProps {
  startupData: {
    Investability: {
      c0_score_venture_investability: string;
    };
    System: {
      shares_count: string;
      followers_count: string;
      views_count: string;
    };
  };
}

export const DashboardPage: FunctionComponent<CardNamePageProps> = ({
  startupData,
}) => {
  const { c0_score_venture_investability: score } = startupData.Investability;
  const { shares_count, followers_count, views_count } = startupData.System;

  const scoreMarker = useRef<HTMLDivElement>(null);
  const scoreMarkerPosition: string = `${+score * 4 + 10}%`;

  useEffect(() => {
    const scoreMarkerElt: HTMLSpanElement | null = scoreMarker.current;
    if (scoreMarkerElt === null) return;

    scoreMarkerElt.style.left = scoreMarkerPosition;
  }, [score, scoreMarkerPosition]);

  let scoreIndicator: string;
  const scoreAsArray: Array<string> = Array.from(score);

  if (scoreAsArray[scoreAsArray.length - 1] === '%') scoreIndicator = '%';
  else scoreIndicator = '/5';

  return (
    <div className="dashboard-page">
      <div className="dashboard-page-feedback dashboard-page__dashboard-page-feedback">
        <div className="dashboard-page-feedback__item">
          <CardNamePageViews className="dashboard-page-feedback__svg" />
          <p className="p-m-15-sb">
            {views_count}
            <span className="dashboard-page-feedback__text"> Views</span>
          </p>
        </div>
        <div className="dashboard-page-feedback__item">
          <CardNamePageFollowers className="dashboard-page-feedback__svg" />
          <p className="p-m-15-sb">
            {followers_count}
            <span className="dashboard-page-feedback__text"> Followers</span>
          </p>
        </div>
        <div className="dashboard-page-feedback__item">
          <Sharing className="dashboard-page-feedback__svg" color="#fff" />
          <p className="p-m-15-sb">
            {shares_count}
            <span className="dashboard-page-feedback__text"> Shares</span>
          </p>
        </div>
      </div>
      <AbilityScore
        className="dashboard-page__ability-score"
        scoreType="investability"
        score={score}
      />
      <div className="startup-score-state dashboard-page__startup-score-state">
        <div
          ref={scoreMarker}
          className="startup-score-state__startup-score-state-visualiser startup-score-state-visualiser"
        >
          <span className="startup-score-state-visualiser__score">{score}</span>
          <span className="startup-score-state-visualiser__full-score">
            {scoreIndicator}
          </span>
          <div className="startup-state-circle startup-score-state-visualiser__startup-state-circle"></div>
        </div>
        <p className="startup-score-state__item">CONCEPT STAGE</p>
        <p className="startup-score-state__item startup-score-state__item_active">
          MVP / PROTOTYPE STAGE
        </p>
        <p className="startup-score-state__item">EARLY PRODUCT USERS</p>
        <p className="startup-score-state__item">EARLY REVENUE STAGE</p>
        <p className="startup-score-state__item">SUSTAINABLE GROWTH</p>

        <div className="startup-score-state__graph">
          <CardNameGraph
            scoreStateColor="#10CEA2"
            scoreMarkerPosition={scoreMarkerPosition}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
