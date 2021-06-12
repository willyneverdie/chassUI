import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

import { moveKnight } from './Game';
import { validatePawnMove, validateKnightMove, validateRookMove, validateBishopMove, validateQueenMove, validateKingMove } from './PieceValidations';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

//Redux
import { connect } from 'react-redux';
import {Increment,Decrement,Move} from './actions/Action';



 const squareTarget = {
	  drop(props, monitor) {
      console.log('boardSquare drop',props);
      // Obtain the dragged item
      const item = monitor.getItem();
      console.log("Item:",item);
      console.log("Item:",item.color);
      const code = item.code;
      //knight = kn, pawn = p, rook = r,queen = q, king =ki ,bishop = b
      switch (code) {
        case "kn":
            {
              console.log('knight');
              if(validateKnightMove(props.coord, item.color)){
                props.move(props.coord);
              }
            };
            break;
        case "p":
            console.log("pawn");
            if(validatePawnMove(props.coord, item.color )){
              console.log("pawn validated");
              props.move(props.coord);
            }

            break;
        case "r":
            console.log("rook");
            if(validateRookMove(props.coord, item.color)){
              console.log("rook validated");
              props.move(props.coord);
            }
            break;
        case "q":
            console.log("queen");
            if(validateQueenMove(props.coord, item.color)){
              console.log("queen validated");
              props.move(props.coord);
            }
            break;
        case "ki":
            console.log("king");
            if(validateKingMove(props.coord, item.color)){
              console.log("king validated");
              props.move(props.coord);
            }
            break;
        case "b":
            console.log("bishop");
            if(validateBishopMove(props.coord, item.color)){
              console.log("bishop validated");
              props.move(props.coord);
            }
            break;
        default:
      }



	  }
  };

  const mapDistpatchToProps= (dispatch)=>{
    return{
      move:(mov)=>dispatch(Move(mov))
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
    getItem: PropTypes.func.isRequired,
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
		      }}>

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
