import React, { useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';

import {
  goToAnotherStartupPage,
  fetchStartupData,
  resetStartupWrapperState,
} from '../../modules/infoPage/infoPage.reducer';
import { closeStartupInfoPage } from '../../modules/data/data.reducer';
import { Slider } from '../../visualisers';
import {
  StartupWrapperFollowing,
  Sharing,
  StartupWrapperDetailedProfile,
} from '../../assets/svgs';

interface OwnProps {
  wrapperTheme: string;
  children: JSX.Element | null;
}
interface StateProps {
  startupPageNumber: number;
  startupId: string;
  wrapperTheme: string;
}
interface DispatchProps {
  closeStartupInfoPage: Function;
  goToAnotherStartupPage: Function;
  resetStartupWrapperState: Function;
  fetchStartupData: Function;
}

type Props = OwnProps & StateProps & DispatchProps;

const StartupWrapper: FunctionComponent<Props> = ({
  wrapperTheme,
  children,
  closeStartupInfoPage,
  startupPageNumber,
  goToAnotherStartupPage,
  fetchStartupData,
  resetStartupWrapperState,
  startupId,
}) => {
  useEffect(() => {
    resetStartupWrapperState();
    fetchStartupData();
  }, [resetStartupWrapperState, fetchStartupData, startupId]);

  const startupPageNames = [
    'WELCOME',
    'OVERVIEW',
    'DASHBOARD',
    'INVESTABILITY',
    'MARKET TYPE',
    'MARKET PROBLEM',
  ];

  return children ? (
    <div className="take-up-full startup-wrapper">
      <div
        className={`startup-wrapper__startup-wrapper-top
          startup-wrapper-top
          startup-wrapper-top_${wrapperTheme}`}
      >
        <button
          className="startup-wrapper-top__close-btn"
          onClick={() => {
            resetStartupWrapperState();
            closeStartupInfoPage();
          }}
        ></button>
        <h3 className="startup-wrapper-top__page-name">
          {startupPageNames[startupPageNumber - 1]}
        </h3>
        <p className="startup-wrapper-top__page-counter-container">
          <span className="startup-wrapper-top__page-counter">
            {startupPageNumber}/20
          </span>
          <span className="startup-wrapper-top__app-view-context">public</span>
        </p>
        <button className="startup-wrapper-top__drop-down-list"></button>
      </div>
      {children}
      <Slider
        className="startup-wrapper__slider"
        currentValue={Math.round((100 / 9) * startupPageNumber)}
        maxValue={100}
      />
      <div className="startup-wrapper__startup-wrapper-bottom startup-wrapper-bottom">
        <button
          onClick={() => {
            goToAnotherStartupPage('last');
          }}
          className="startup-wrapper-bottom__item startup-wrapper-bottom__left-arrow"
        ></button>
        <button className="startup-wrapper-bottom__item startup-wrapper-bottom__management">
          <StartupWrapperFollowing />
          <span className="startup-wrapper-bottom__management-text">
            FOLLOW
          </span>
        </button>
        <button className="startup-wrapper-bottom__item startup-wrapper-bottom__management">
          <Sharing />
          <span className="startup-wrapper-bottom__management-text">SHARE</span>
        </button>
        <button className="startup-wrapper-bottom__item startup-wrapper-bottom__management">
          <StartupWrapperDetailedProfile />
          <span className="startup-wrapper-bottom__management-text">
            DETAILED
            <br /> PROFILE
          </span>
        </button>
        <button
          onClick={() => {
            goToAnotherStartupPage('next');
          }}
          className="startup-wrapper-bottom__item startup-wrapper-bottom__right-arrow"
        ></button>
      </div>
    </div>
  ) : (
    <div className="startup-wrapper__loading">Loading...</div>
  );
};

const mapStateToProps = (
  { InfoPageState: { startupPageNumber }, MainState: { activeStartupId } }: any,
  { wrapperTheme }: OwnProps
): StateProps => ({
  startupPageNumber,
  wrapperTheme,
  startupId: activeStartupId,
});

const mapDispatchToProps: DispatchProps = {
  closeStartupInfoPage,
  goToAnotherStartupPage,
  resetStartupWrapperState,
  fetchStartupData,
};

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(StartupWrapper);
