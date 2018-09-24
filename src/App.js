import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Cell = styled.button`
  font-size: 1em;
  padding: 2em;
  border: 2px solid red;
  border-radius: 3px;
`;

class App extends Component {
  state = {
    text: 'move'
  }

  addMove = () => {
    console.log(this.props.testStore);
    const last = this.props.testStore.slice(-1)[0];

    this.props.onAddMove();
    console.log(last);

    this.setState({
      text: last
    });
  }

  render() {
    return (
      <div>
        <Cell onClick={this.addMove}>{this.state.text}</Cell>
      </div>
    );
  }
}

export default connect (
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddMove: () => {
      dispatch({ type: 'ADD_MOVE', payload: 'o' });
    }
  })
)(App);
