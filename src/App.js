import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import './App.css';

const Cell = styled.button`
  font-size: 1em;
  padding: 2em;
  border: 2px solid red;
  border-radius: 3px;
`;

class App extends Component {

  addMove = () => {
    if (this.props.currentMove === '-') {
      this.props.onAddMove('x');
      return;
    }
    if (this.props.currentMove === 'x') {
      this.props.onAddMove('o');
    } else {
      this.props.onAddMove('x');
    }
  }

  handleCellClick(i, j) {
    if (this.props.currentMove === '-') {
      this.props.onAddMove('x', i, j);
      return;
    }
    if (this.props.currentMove === 'x') {
      this.props.onAddMove('o', i, j);
    } else {
      this.props.onAddMove('x', i, j);
    }
  }

  render() {
    return (
      <div>
        {this.props.field.map((row, i) => (
          <div className="row">
            {row.map((value, j) => <div className="cell" onClick={() => this.handleCellClick(i, j)}>{value}</div>)}
          </div>
        ))}
        <Cell onClick={this.addMove}>{this.props.currentMove}</Cell>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testStore: state,
  field: state.field,
  currentMove: state.currentMove
});

const mapDispatchToProps = dispatch => ({
  onAddMove: (player, i, j) => {
    dispatch({ type: 'ADD_MOVE', player, i, j });
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App);
