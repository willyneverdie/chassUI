import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, test} from './Game';

//REDUX
import { connect } from 'react-redux';
import {Increment,Decrement,Move} from './actions/Action';

const mapDistpatchToProps= (dispatch)=>{
  return{
    move:(mov)=>dispatch(Move(mov)),
  }
}

class Square extends Component {
  render() {
    const { color, coord, pieceColor } = this.props;

    const fill = color ? 'green' : 'white';
    const stroke = color ? 'white' : 'green';
    let key = coord;

    return (
    	<div className='square-box ' style={{
	    	backgroundColor: fill,
	    	key: key
	        }}
	        onClick={() => this.handleSquareClick(coord)}>
	        {this.props.children}
	    </div>
        )
  }



	 handleSquareClick(toX) {
	 	//moveKnight(toX);
	 	console.log('handleSquareClick:',toX);
    //console.log(this.props.move);
    this.props.move(toX);
	 	//test(toX);



	}
}

export default connect(null,mapDistpatchToProps)(Square);

Square.propTypes = {
  color: PropTypes.bool,
  coord: PropTypes.string,
  pieceColor: PropTypes.string
};
