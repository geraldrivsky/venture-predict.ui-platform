import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { getStyle } from './StartupInfo.style';
import { abbreviateNumber } from '../../helpers';
import { StartupsNumScore } from '../../visualisers';
import { showStartupInfoPage } from '../../modules/data/data.reducer';

interface StatupInfoProps {
  properties: {
    views: string;
    followers: string;
    logoSrc: string;
    industry: string;
    technology: string;
    name: string;
    lastUpdated: string;
    investAbility: string;
    id: string;
  };
  showStartupInfoPage: Function;
  activeStartupId: string;
}

const StartupInfo: FunctionComponent<StatupInfoProps> = ({
  properties: {
    views,
    followers,
    logoSrc = 'data:image/png;base64,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',
    industry,
    technology = '',
    name,
    lastUpdated,
    investAbility,
    id,
  },
  showStartupInfoPage,
  activeStartupId,
}) => {
  const {
    blackSpan,
    redSpan,
    startupFace,
    span,
    img,
    lastUpdatedSpan,
    feedback,
    startupDescr,
  } = getStyle();
  
  const startupInfo: any = useRef(null);

  useEffect(() => {
    if (activeStartupId === null) return () => {};

    const startupInfoElt = startupInfo.current;

    if (id === activeStartupId)
      startupInfoElt.classList.add('startups-table__row_active');

    return () => {
      startupInfoElt.classList.remove('startups-table__row_active');

    };
  }, [activeStartupId, id]);

  return (
    <div
      ref={startupInfo}
      onClick={() => {
        showStartupInfoPage(id);
      }}
      className="startups-table__row"
    >
      <div style={startupFace}>
        <img
          style={img}
          src={logoSrc}
          alt="Startup Logo"
        />
        <div style={startupDescr}>
          <span className="p-xs-11">{name}</span>
            <span style={span}>{`${industry} - ${technology}`}</span>
        </div>
      </div>
      <div style={feedback}>
        <span style={blackSpan}>{abbreviateNumber(views)}</span>
        <span style={redSpan}>
          {abbreviateNumber(followers)}
        </span>
      </div>
      <span style={lastUpdatedSpan}>{lastUpdated}</span>
      <StartupsNumScore numScore={investAbility} />
    </div>
  );
};

const mapStateToProps = ({ MainState: { activeStartupId } }: any) => ({
  activeStartupId,
});

const mapDispatchToProps = {
  showStartupInfoPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartupInfo);
