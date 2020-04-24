import React from 'react';
import { connect } from 'react-redux';

import { StartupWrapper } from '../../widgets';
import {
  WelcomePage,
  OverviewPage,
  DashboardPage,
  InvestabilityPage,
  MarketTypePage,
  MarketProblemPage
} from '../../panels';

export const InfoPage = ({
  TreeCreator,
  nodes,
  activeStartupId,
  startupData,
  startupPageNumber,
}: any) => {
  const pages: Array<{
    StartupPage: Function;
    options?: { background: string; wrapperTheme?: string };
  }> = [
    { StartupPage: WelcomePage },
    { StartupPage: OverviewPage },
    {
      StartupPage: DashboardPage,
      options: { background: '#454545', wrapperTheme: 'light' },
    },
    {
      StartupPage: InvestabilityPage,
      options: { background: '#454545', wrapperTheme: 'light-dark' },
    },
    {
      StartupPage: MarketTypePage,
      options: {
        background: 'linear-gradient(360deg, #6D5ECE 16.28%, #10CEA2 102.83%)',
        wrapperTheme: 'white',
      },
    },
    {
      StartupPage: MarketProblemPage,
      options: {
        background: 'linear-gradient(119.11deg, #F1D779 -0.5%, #AD0E5A 100%)',
        wrapperTheme: 'white',
      },
    },
  ];
  const {
    StartupPage,
    options: { background = '', wrapperTheme = 'dark' } = {},
  } = pages[startupPageNumber - 1];

  return (
    <div className="card info-page" style={{ background: background }}>
      {activeStartupId !== null ? (
        <StartupWrapper wrapperTheme={wrapperTheme}>
          {startupData ? <StartupPage startupData={startupData} /> : null}
        </StartupWrapper>
      ) : (
        nodes &&
        nodes.map((node: any, i: number) => (
          <div className="take-up-full" key={i}>
            {TreeCreator(node)}
          </div>
        ))
      )}
    </div>
  );
};

InfoPage.types = {};

const mapStateToProps = ({
  InfoPageState: { startupData, startupPageNumber },

  MainState: { activeStartupId },
}: any) => ({
  activeStartupId,
  startupData,
  startupPageNumber,
});

export default connect(mapStateToProps)(InfoPage);
