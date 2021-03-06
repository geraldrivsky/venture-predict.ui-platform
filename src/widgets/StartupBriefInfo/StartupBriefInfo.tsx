import React, { FunctionComponent } from 'react';

import { StatupBriefInfoLink } from '../../assets/svgs';

interface StartupBriefInfoProps {
  logoSrc: string;
  name: string;
  url: string;
  className: string;
}

const StartupBriefInfo: FunctionComponent<StartupBriefInfoProps> = ({
  logoSrc = 'data:image/png;base64,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',
  name,
  url,
  className,
}) => {
  return (
    <div className={`${className} startup-brief-info`}>
      <img
        src={logoSrc}
        className="startup-brief-info__logo"
        alt="startup logo"
      />
      <h2 className="startup-brief-info__name h2-24-light">{name}</h2>
      {url ? (
        <a href={url} className="startup-brief-info__url">
          {url}
          <StatupBriefInfoLink className="startup-brief-info__svg" />
        </a>
      ) : null}
    </div>
  );
};

export default StartupBriefInfo;
