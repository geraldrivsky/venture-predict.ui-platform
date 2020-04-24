import React, { FunctionComponent } from 'react';

import { StartupBriefInfo } from '../../widgets';
import exampleStartupImageSrc from '../../assets/icons/image.jpg';
import {
  StartupStateGraph,
  OverviewFounders,
  OverviewIndustry,
  OverviewTechnology,
  OverviewLocation,
} from '../../assets/svgs';
import { getRgbaFromHex } from '../../helpers';

interface OverviewProps {
  startupData: {
    General: {
      logo: string;
      startup_name: string;
      website: string;
      location: string;
      industry: string;
      technology: string;
      product_description: string;
    };
    Founders: [
      {
        founders_count: string;
      }
    ];
    Investability: {
      c0_score_venture_investability: string;
    };
  };
}

export const Overview: FunctionComponent<OverviewProps> = ({
  startupData: {
    General: {
      logo,
      startup_name,
      website,
      location,
      industry,
      technology,
      product_description,
    },
    Founders: [{ founders_count }],
    Investability: { c0_score_venture_investability: score },
  },
}) => {
  const scoreMarkerPosition: string = `${+score * 4 + 10}%`;

  return (
    <div className="overview">
      <StartupBriefInfo
        className="overview__startup-brief-info"
        logoSrc={logo}
        name={startup_name}
        url={website}
      />
      <p className="notice overview__notice p-s-13">{product_description}</p>
      <div className="overview__overview-info overview-info">
        <div className="overview-info-item">
          <OverviewLocation className="overview-info-item__svg" />
          <span className="overview-info-item__label">Location</span>
          <span className="overview-info-item__def">{location}</span>
        </div>
        <div className="overview-info-item">
          <OverviewFounders className="overview-info-item__svg" />
          <span className="overview-info-item__label">
            {+founders_count - 1} Co-Founders
          </span>
          <span className="overview-info-item__def">1 Core Employee</span>
        </div>
        <div className="overview-info-item">
          <OverviewIndustry className="overview-info-item__svg" />
          <span className="overview-info-item__label">Industry</span>
          <span className="overview-info-item__def">{industry}</span>
        </div>
        <div className="overview-info-item">
          <OverviewTechnology className="overview-info-item__svg" />
          <span className="overview-info-item__label">Technology</span>
          <span className="overview-info-item__def">{technology}</span>
        </div>
      </div>
      <img
        src={exampleStartupImageSrc}
        className="overview__img"
        alt="example startup screenshot src"
      />
      <StartupStateGraph
        opacity={0.2}
        className="overview__graph"
        scoreStateColor={getRgbaFromHex('#898989', 0.6)}
        scoreMarkerPosition={scoreMarkerPosition}
      />
    </div>
  );
};

export default Overview;
