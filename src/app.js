import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Jugadas from './jugadas';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("props",props);
  }

  render(){
    return [
        <Board piecePosition={this.props.piecePosition} />
        
      ];
  }
}

export default App;
