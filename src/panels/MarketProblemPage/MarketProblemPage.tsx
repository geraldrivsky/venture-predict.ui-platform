import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { SliderWithNumScore } from '../../widgets';
import { Colors } from '../../Styles';
import { StartupStateGraph } from '../../assets/svgs';

interface StateProps {
  startupData: {
    General: {
      problem_description: string;
    };
    Investability: {
      score_problem_significance: string;
    };
  };
}

type Props = StateProps;

const ComponentName: FunctionComponent<Props> = ({
  startupData: {
    General: { problem_description },
    Investability: { score_problem_significance: score },
  },
}) => {
  const scoreMarkerPosition: string = `${+score * 4 + 10}%`;
  
  return (
    <div className="market-problem-page">
      <div className="market-problem-page__problem-introduction">
        <p>
          Both startup founders and investors struggle to understand and manage
          startup success drivers.
        </p>
        <p>9/10 startup fail.</p>
      </div>
      <p className="market-problem-page__righted market-problem-page__problem-score-label">
        PERCEIVED PROBLEM SIGNIFICANCE
      </p>
      <SliderWithNumScore
        withBackground={true}
        text="problem level"
        score={score}
        className="market-problem-page__righted market-problem-page__slider-with-num-score"
      />
      <p className="market-problem-page__righted market-problem-page__problem-description">
        {problem_description}
      </p>
      <div
        style={{ left: scoreMarkerPosition }}
        className="market-problem-page__startup-state-circle startup-state-circle"
      ></div>
      <StartupStateGraph
        className="market-problem-page__graph"
        scoreStateColor={Colors.VP_SUPER_LIGHT_GREY}
        scoreMarkerPosition={scoreMarkerPosition}
      />
    </div>
  );
};

const mapStateToProps = ({
  InfoPageState: { startupData },
}: any): StateProps => ({
  startupData,
});

export default connect<StateProps>(mapStateToProps)(ComponentName);
