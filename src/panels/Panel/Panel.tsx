import React from 'react';
import { connect } from 'react-redux';
import { Dashboard } from '..';

export const Panel = ({ TreeCreator, nodes, activeStartupId }: any) => {
  const getPanelClassName = () => {
    if (activeStartupId === null) return 'panel';
    else return 'panel panel_showed_startup';
  };

  return (
    <div className={getPanelClassName()}>
      <>
        <div>
          <Dashboard
            navCounters={{
              startupsCounter: 1600,
              followingCounter: 12,
              sharedWithMeCounter: 8,
            }}
          />
        </div>
        {nodes && <div>{TreeCreator(nodes[0])}</div>}
      </>
    </div>
  );
};

Panel.types = {};

const mapStateToProps = ({ MainState: { activeStartupId } }: any) => ({
  activeStartupId,
});

export default connect(mapStateToProps)(Panel);
