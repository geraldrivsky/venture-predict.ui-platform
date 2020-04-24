import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  RoadmapComplete,
  RoadmapOutstanding,
  RoadmapUpcoming,
} from '../../assets/svgs';
import { getStyle } from './RoadmapItem.style';

class RoadmapItem extends Component<any, any> {
  static types = {
    itemName: {
      contract: 'required',
      type: 'string',
    },
    status: {
      contract: 'required',
      type: 'string',
    },
  };

  render() {
    const {
      itemName: { value: itemName },
      status: { value: status },
    } = this.props.properties;
    const { roadmapItem, roadmapItemText } = getStyle(this.props.properties);

    let Icon =
      status === 'complete'
        ? RoadmapComplete
        : status === 'upcoming'
        ? RoadmapUpcoming
        : RoadmapOutstanding;

    return (
      <div style={{ marginBottom: 15, ...roadmapItem }}>
        <Icon />
        <span style={roadmapItemText}>{itemName}</span>
      </div>
    );
  }
}

function mapStateToProps(store: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RoadmapItem);
