import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import BoardSquare from './BoardSquare';
import Knight from './pieces/Knight';
import Rook from './pieces/Rook';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';
import Pawn from './pieces/Pawn';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


//REDUX
import store from './store/Store';
import { connect } from 'react-redux';
import {Increment,Decrement,Move} from './actions/Action';

const mapStateToProps = (state) => {
  return{
    inc:state.increment,
    dec:state.decrement,
    piecePos: state.boardmove
  }
}

const mapDistpatchToProps= (dispatch)=>{
  return{
    increment:()=>dispatch(Increment()),
    decrement:()=>dispatch(Decrement()),
    move:()=>dispatch(Move()),
  }
}

//export default class Board extends Component {
//@DragDropContext(HTML5Backend)
class Board extends Component {

  static propTypes = {
    piecePosition: PropTypes.instanceOf(Map).isRequired,

  };

  constructor(props) {
      super(props);
      this.state = {piecePos: this.props.piecePosition};
      console.log('Board constructor');
    }

  componentDidMount() {
    console.log('Board did mount');

    }

    componentWillUnmount() {
      console.log('Board will Unmount');
    }

  render() {

    //Reading the move from the STORE
    console.log('Board()->render(props)->store.getState().boardmove:',store.getState().boardmove.get("B1"));
    //const [knightX, knightY] = store.getState().boardmove;

    const col = ['A','B','C','D','E','F','G','H'];
    const squares = [];

    let color = true;
    let piece , piece2;
    let pieces = [{
                    key:"A1",
                    piece: "rook"
                  },
                  {
                    key:"A2",
                    piece: "knight"
                  },
                  {
                    key:"A3",
                    piece: "bishop"
                  }
    ];


    //let testmap = new Map([[ "B1", <Knight color='white'/> ],[ "B2", <Pawn color='black'/> ]]);
    //console.log("test map:",testmap.get("G1").props);

    let myMap = new Map([
     /* [ "A1", <Rook color='white'/> ],
      [ "B1", <Knight color='white'/> ],
      [ "C1", <Bishop color='white'/> ],
      [ "D1", <Queen color='white'/> ],
      [ "E1", <King color='white'/> ],
      [ "F1", <Bishop color='white'/> ],
      [ "G1", <Knight color='white'/> ],
      [ "H1", <Rook color='white'/> ],
      [ "A2", <Pawn color='white'/> ],
      [ "B2", <Pawn color='white'/> ],
      [ "C2", <Pawn color='white'/> ],
      [ "D2", <Pawn color='white'/> ],
      [ "E2", <Pawn color='white'/> ],
      [ "F2", <Pawn color='white'/> ],
      [ "G2", <Pawn color='white'/> ],
      [ "H2", <Pawn color='white'/> ],

      [ "A8", <Rook color='black'/> ],
      [ "B8", <Knight color='black'/> ],
      [ "C8", <Bishop color='black'/> ],
      [ "D8", <Queen color='black'/> ],
      [ "E8", <King color='black'/> ],
      [ "F8", <Bishop color='black'/> ],
      [ "G8", <Knight color='black'/> ],
      [ "H8", <Rook color='black'/> ],
      [ "A7", <Pawn color='black'/> ],
      [ "B7", <Pawn color='black'/> ],
      [ "C7", <Pawn color='black'/> ],
      [ "D7", <Pawn color='black'/> ],
      [ "E7", <Pawn color='black'/> ],
      [ "F7", <Pawn color='black'/> ],
      [ "G7", <Pawn color='black'/> ],
      [ "H7", <Pawn color='black'/> ]*/

    ]);



    //get board from the store
    myMap = store.getState().boardmove;
    console.log("myMap:",myMap);

    //codes for pieces
    //knight = kn, pawn = p, rook = r,queen = q, king =ki ,bishop = b

    //Fill array with all the squares that in the end form the board
    for (let i = 8; i >= 1; i--) {
      {color = !color}
      for (let j = 1; j <= 8; j++)
      {
        if(myMap.has(col[j-1]+i))
                piece = "tiene";
        else
                piece = "";

          // squares.push(
          //  <BoardSquare color={color} coord={col[j-1]+i} piece={myMap.get(col[j-1]+i)} >
          //     {myMap.get(col[j-1]+i)}
          //  </BoardSquare>
          //  )

          let nombrePieza = "";
          if(myMap.get(col[j-1]+i)!= undefined){
            //console.log("tiene valor:"+col[j-1]+i);
            //console.log("valor es:"+myMap.get(col[j-1]+i).props.code);
            nombrePieza=myMap.get(col[j-1]+i).props.code;
          }

          squares.push(
            <BoardSquare color={color} coord={col[j-1]+i} piece={nombrePieza} >
              {myMap.get(col[j-1]+i)}
            </BoardSquare>
        );
          color = !color

    }
  }

    //const counter = useSelector(state => state.boardReducer);

    return (
      <div className='board-parent' key={squares.toString()}>
        {/**/}
        {squares}
      {/*squares[1].props.coord +squares[1].props.color*/}
      {/*myMap.forEach( (val, key) => console.log(key, val) )*/}
      {/*myMap.get("A1")*/}
      <h1>test</h1>
      </div>







    );
  }
}

const FBoard = DragDropContext(HTML5Backend)(Board);
export default connect(mapStateToProps,mapDistpatchToProps)(FBoard);
