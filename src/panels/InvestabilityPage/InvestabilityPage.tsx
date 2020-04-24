import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { Slider, NumScore } from '../../visualisers';
import { Colors } from '../../Styles';

interface OwnProps {}
interface StateProps {
  startupData: {
    Investability: {
      c0_score_venture_investability: string;
      c1_score_market_attractiveness: string;
      c2_score_team: string;
      c3_score_traction: string;
      c4_score_product: string;
      c5_score_ip_position: string;
    };
  };
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const ComponentName: FunctionComponent<Props> = ({
  startupData: {
    Investability: {
      c0_score_venture_investability: investabilityScore,
      c1_score_market_attractiveness: marketScore,
      c2_score_team: teamScore,
      c3_score_traction: tractionScore,
      c4_score_product: productScore,
      c5_score_ip_position: ipPositionScore,
    },
  },
}) => {
  const { VP_SUPER_DARK } = Colors;

  return (
    <div className="investability-page">
      <div className="investability-main-score investability-page__investability-main-score">
        <p className="investability-main-score__text">INVESTABILITY<br /> SCORE</p>
        <Slider
          className="investability-main-score__slider"
          boxShadow={true}
          currentValue={+investabilityScore}
          maxValue={5}
        />
        <NumScore
          currentValue={+investabilityScore}
          maxValue={5}
          maxValueColor={VP_SUPER_DARK}
          currentValueColor={'white'}
          haveBox={true}
        />
      </div>
      <div className="investability-page__svg"></div>
      <ul className="investability-page__investability-scores investability-scores">
        <li className="investability-scores__item">
          <div className="investability-scores__w"><span>w</span></div>
          <p className="investability-scores__text">MARKET</p>
          <NumScore
            className="investability-scores__num-score"
            currentValue={+marketScore}
            maxValueColor={VP_SUPER_DARK}
            currentValueColor={'white'}
            haveBox={true}
          />
          <div className="investability-scores__capsules">
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
          </div>
        </li>
        <li className="investability-scores__item">
          <div className="investability-scores__w"><span>w</span></div>
          <p className="investability-scores__text">TEAM</p>
          <NumScore
            className="investability-scores__num-score"
            currentValue={+teamScore}
            maxValueColor={VP_SUPER_DARK}
            currentValueColor={'white'}
            haveBox={true}
          />
          <div className="investability-scores__capsules">
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
          </div>
        </li>
        <li className="investability-scores__item">
          <div className="investability-scores__w"><span>w</span></div>
          <p className="investability-scores__text">TRACTION</p>
          <NumScore
            className="investability-scores__num-score"
            currentValue={+tractionScore}
            maxValueColor={VP_SUPER_DARK}
            currentValueColor={'white'}
            haveBox={true}
          />
          <div className="investability-scores__capsules">
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
          </div>
        </li>
        <li className="investability-scores__item">
          <div className="investability-scores__w"><span>w</span></div>
          <p className="investability-scores__text">PRODUCT</p>
          <NumScore
            className="investability-scores__num-score"
            currentValue={+productScore}
            maxValueColor={VP_SUPER_DARK}
            currentValueColor={'white'}
            haveBox={true}
          />
          <div className="investability-scores__capsules">
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
          </div>
        </li>
        <li className="investability-scores__item">
          <div className="investability-scores__w"><span>w</span></div>
          <p className="investability-scores__text">IP PROTECTION</p>
          <NumScore
            className="investability-scores__num-score"
            currentValue={+ipPositionScore}
            maxValueColor={VP_SUPER_DARK}
            currentValueColor={'white'}
            haveBox={true}
          />
          <div className="investability-scores__capsules">
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
            <div className="investability-scores__capsule"></div>
          </div>
        </li>
      </ul>
      <div className="category-performance investability-page__category-performance">
        <span className="category-performance__span">CATEGORY PERFORMANCE</span>
        <div className="category-performance__list category-performance__item">Excellent</div>
        <div className="category-performance__list category-performance__item">Average</div>
        <div className="category-performance__list category-performance__item">Needs Improvement</div>
      </div>
    </div>
  );
};

const mapStateToProps = (
  { InfoPageState: { startupData } }: any,
  ownProps: OwnProps
): StateProps => ({ startupData });

const mapDispatchToProps: DispatchProps = {};

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(ComponentName);
