import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

import { moveKnight } from './Game';
import { validatePawnMove, validateKnightMove, validateRookMove, validateBishopMove, validateQueenMove, validateKingMove, isDestTaken } from './PieceValidations';
import { ItemTypes, knightCode, kingCode, queenCode, rookCode, bishopCode, pawnCode } from './Constants';
import { DropTarget } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

//Redux
import { connect } from 'react-redux';
import {Increment,Decrement,Move,Notation} from './actions/Action';



 const squareTarget = {
	  drop(props, monitor) {
      console.log('boardSquare drop',props);
      // Obtain the dragged item
      const item = monitor.getItem();
      console.log("Item:",item);
      console.log("Item:",item.color);
      const code = item.code;
      //knight = kn, pawn = p, rook = r,queen = q, king =ki ,bishop = b
      //let canMove;
      //let isDestTakenVar;
      switch (code) {
        case knightCode:
            {
              console.log('knight');
              let {canMove, isDestTakenVar, targetPieceCode} = validateKnightMove(props.coord, item.color);
              if(canMove){
                props.move(props.coord);
                //if(takingPiece) props.notation(code+'x'+props.coord.toLowerCase());
                //else props.notation(code+props.coord.toLowerCase());
                updateNotation(isDestTakenVar, code , props.coord, props, targetPieceCode);
              }
            };
            break;
        case pawnCode:
            console.log("pawn");
            var {canMove, isDestTakenVar, targetPieceCode} = validatePawnMove(props.coord, item.color);
            if(canMove){
              console.log("pawn validated");
              props.move(props.coord);
              //if(pawnValidate.isDestTakenVar) props.notation(code+'x'+pawnValidate.targetPieceCode+props.coord.toLowerCase());
              //else props.notation(code+props.coord.toLowerCase());
              updateNotation(isDestTakenVar, code , props.coord, props, targetPieceCode);
            }
            break;
        case rookCode:
            console.log("rook");
            var {canMove, isDestTakenVar, targetPieceCode} = validateRookMove(props.coord, item.color);
            if(canMove){
              console.log("rook validated");
              props.move(props.coord);
              //if(isDestTaken) props.notation(code+'x'+props.coord.toLowerCase());
              //else props.notation(code+props.coord.toLowerCase());
              updateNotation(isDestTakenVar, code , props.coord, props, targetPieceCode);
            }
            break;
        case queenCode:
            console.log("queen");
            var {canMove, isDestTakenVar, targetPieceCode} = validateQueenMove(props.coord, item.color);
            if(canMove){
              console.log("queen validated");
              props.move(props.coord);
              //if(isDestTakenVar) props.notation(code+'x'+targetPieceCode+props.coord.toLowerCase());
              //else props.notation(code+props.coord.toLowerCase());
              updateNotation(isDestTakenVar, code , props.coord, props, targetPieceCode);
            }
            break;
        case kingCode:
            console.log("king");
            var {canMove, isDestTakenVar, targetPieceCode} = validateKingMove(props.coord, item.color);
            if(canMove){
              console.log("king validated");
              props.move(props.coord);
              //if(kingValidate.isDestTakenVar) props.notation(code+'x'+kingValidate.targetPieceCode+props.coord.toLowerCase());
              //else props.notation(code+props.coord.toLowerCase());
              updateNotation(isDestTakenVar, code , props.coord, props, targetPieceCode);
            }
            break;
        case bishopCode:
            console.log("bishop");
            var {canMove, isDestTakenVar, targetPieceCode} = validateBishopMove(props.coord, item.color);
            if(canMove){
              console.log("bishop validated");
              props.move(props.coord);
              //if(bishopValidate.isDestTaken) props.notation(code+'x'+props.coord.toLowerCase());
              //else props.notation(code+props.coord.toLowerCase());
              updateNotation(isDestTakenVar, code , props.coord, props, targetPieceCode);
            }
            break;
        default:
      }



	  }
  };

  const updateNotation = (takingPiece, code , coord, props, targetPieceCode) => {
    console.log('updateNotation:',takingPiece, code ,props);
    if(takingPiece)
      props.notation(code+'x'+targetPieceCode+coord.toLowerCase());
    else
      props.notation(code+coord.toLowerCase());
  }

  const mapDistpatchToProps= (dispatch)=>{
    return{
      move:(mov)=>dispatch(Move(mov)),
      notation:(mov)=>dispatch(Notation(mov))
    }
  }


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

//@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
class BoardSquare extends Component {

  static propTypes = {
    coord: PropTypes.string,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    getItem: PropTypes.func,
    color: PropTypes.bool,
    piece: PropTypes.string
  };



render() {
    //const { x, y } = this.props;

    const { color, coord, connectDropTarget, isOver } = this.props;
    const fill = color ? 'green' : 'white';
    const stroke = color ? 'white' : 'green';
    let key = coord;

    return (
		 	connectDropTarget(

		 	<div style={{
		        position: 'relative',
		        width: '100%',
		        height: '100%'
		      }} key={key}>

		      <Square color={color} coord={coord}>
		        {this.props.children}
		      </Square>
		      {isOver &&
		          <div style={{
		            position: 'absolute',
		            top: 0,
		            left: 0,
		            height: '100%',
		            width: '100%',
		            zIndex: 1,
		            opacity: 0.5,
		            backgroundColor: 'yellow',
		          }} />
		       }

		    </div>
		)
    );
  }


}

BoardSquare = DropTarget(ItemTypes.CHESSPIECE, squareTarget, collect)(BoardSquare);
export default connect(null,mapDistpatchToProps)(BoardSquare);
