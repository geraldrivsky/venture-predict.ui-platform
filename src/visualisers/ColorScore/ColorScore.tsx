import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStyle } from './ColorScore.style';

export class ColorScore extends Component<any, any> {
  static types = {
    color: {
      contract: 'required',
      type: 'string',
    },
  }
  
  render() {
    return <div style={getStyle(this.props.properties).colorScore} />;
  }
}

function mapStateToProps(store: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorScore);
