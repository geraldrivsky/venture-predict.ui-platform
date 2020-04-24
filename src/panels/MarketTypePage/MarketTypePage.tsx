import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { StartupStateGraph } from '../../assets/svgs';
import { Colors } from '../../Styles';

interface OwnProps {}
interface StateProps {
  startupData: {
    General: {
      industry: string;
      technology: string;
      target_customers_description: string;
      customer_type: string;
    };
    Investability: { c0_score_venture_investability: string };
  };
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const MarketTypePage: FunctionComponent<Props> = ({
  startupData: {
    General: {
      industry,
      technology,
      target_customers_description,
      customer_type,
    },
    Investability: { c0_score_venture_investability: score },
  },
}) => {
  const scoreMarkerPosition: string = `${+score * 4 + 10}%`;

  return (
    <div className="market-type-page">
      <div className="market-type-page__market-schema market-type-schema">
        <div className="market-type-schema__items">
          <div className="market-type-schema__item">
            <p className="market-type-schema__text p-s-13">Technology</p>
            <p className="market-type-schema__text p-s-13 p-s-13_pale">
              Applied
              <br /> to
            </p>
          </div>
          <div className="market-type-schema__item">
            <p className="market-type-schema__text p-s-13">Industry</p>
            <p className="market-type-schema__text p-s-13 p-s-13_pale">With</p>
          </div>
          <div className="market-type-schema__item">
            <p className="market-type-schema__text p-s-13">Customer Type</p>
          </div>
        </div>
        <div className="market-type-schema__diagram">
          <div className="market-type-schema__diagram-item market-type-schema__technology">
            <div className="market-type-schema__technology-diagram-decor market-type-schema__diagram-decor">
              <div className="market-type-schema__diagram-decor-circle"></div>
              <div className="market-type-schema__diagram-decor-line"></div>
              <div className="market-type-schema__technology-decor-line"></div>
            </div>
            <p className="p-s-13 p-s-13_dark">{technology}</p>
          </div>
          <div className="market-type-schema__diagram-item market-type-schema__industry">
            <div className="market-type-schema__industry-diagram-decor market-type-schema__diagram-decor">
              <div className="market-type-schema__diagram-decor-circle"></div>
              <div className="market-type-schema__diagram-decor-line"></div>
            </div>
            <p className="p-s-13 p-s-13_case_upper">{industry}</p>
          </div>
          <p className="market-type-schema__diagram-item p-s-13 p-s-13_case_upper market-type-schema__customer-type">
            {customer_type}
            <div className="market-type-schema___customer-type-diagram-decor market-type-schema__diagram-decor">
              <div className="market-type-schema__diagram-decor-circle"></div>
              <div className="market-type-schema__diagram-decor-line"></div>
              <div className="market-type-schema__customer-type-decor-line"></div>
            </div>
          </p>
        </div>
      </div>
      <p className="market-type-page__customer-type-desc">
        {target_customers_description}
      </p>
      <div
        style={{ left: scoreMarkerPosition }}
        className="market-type-page__startup-state-circle startup-state-circle"
      ></div>
      <StartupStateGraph
        className="market-type-page__graph"
        scoreStateColor={Colors.VP_SUPER_LIGHT_GREY}
        scoreMarkerPosition={scoreMarkerPosition}
      />
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
)(MarketTypePage);
