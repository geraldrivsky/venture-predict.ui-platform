import React from 'react';

export default function DefaultInfoPageContent({
  properties: {
    globalStartupsCount,
    globalViewsCount,
    globalCommunityCount,
    startupName,
    launchDays,
    coOverallVentureScore,
  },
}: any) {
  return (
    <div className="default-info-page-content">
      <div className="default-info-page-content__top default-info-page-content__count default-info-page-content__left">
        <span className="p-fz-13 default-info-page-content__pale">STARTUPS</span>
        <div className="p-fz-42">{globalStartupsCount.value}</div>
      </div>
      <div className="default-info-page-content__top default-info-page-content__count">
        <span className="p-fz-13 default-info-page-content__pale">VIEWS</span>
        <div className="p-fz-42">{globalViewsCount.value}</div>
      </div>

      <div className="default-info-page-content__top default-info-page-content__count default-info-page-content__right">
        <span className="p-fz-13 default-info-page-content__pale">COMMUNITY SIZE</span>
        <div className="p-fz-42">{globalCommunityCount.value}</div>
      </div>
      <div className="p-fz-14 default-info-page-content__left">
        <p>{startupName.value}</p>
        <p>:: Launch T-{launchDays.value} days</p>
        <p>:: Investability {coOverallVentureScore.value} / 5</p>
      </div>
      <div></div>
      <p className="default-info-page-content__positioned p-fz-9 default-info-page-content__paler default-info-page-content__right">ANOTHER NEW STARTUP<br /> LAUNCHED...<br /> T+5</p>
      <p className="default-info-page-content__bottom p-fz-14 default-info-page-content__paler default-info-page-content__left">/ DETAILED VIEW AVAILABLE</p>
    </div>
  );
}

DefaultInfoPageContent.types = {
  globalStartupsCount: {
    type: 'number',
    contest: 'required',
  },
  globalViewsCount: {
    type: 'number',
    contest: 'required',
  },
  globalCommunityCount: {
    type: 'number',
    contest: 'required',
  },
  startupName: {
    type: 'string',
    contest: 'required',
  },
  launchDays: {
    type: 'number',
    contest: 'required',
  },
  coOverallVentureScore: {
    type: 'number',
    contest: 'required',
  },
};
