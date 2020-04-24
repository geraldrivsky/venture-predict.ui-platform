import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMock, getData } from './modules/data/data.service';
import TreeCreator from './modules/render';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      mode: 'default',
    };
  }

  componentDidMount() {
    this.props.getData('dataMock1');
  }

  componentWillUpdate(nextProps: any) {
    if (this.props.data !== nextProps.data) {
      this.props.getMock('mock');
    }
  }

  render() {
    if (this.props.error) {
      return (
        <div style={{ background: 'rgba(255,0,0,0.1)', padding: '10px' }}>
          <h5>{this.props.error.message}</h5>
          <pre style={{ background: 'rgba(255,0,0,0.1)', padding: '10px' }}>
            {this.props.error.description}
          </pre>
        </div>
      );
    }
    return this.props.nodes ? (
      <TreeCreator nodes={this.props.nodes} />
    ) : (
      <span>Ожидание...</span>
    );
  }
}

function mapStateToProps(store: any) {
  return {
    data: store.MainState.data,
    error: store.MainState.error,
    nodes: store.MainState.nodes,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getMock: (query: any) => {
      dispatch(getMock(query));
    },
    getData: (query: any) => {
      dispatch(getData(query));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
