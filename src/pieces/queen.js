import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const pieceSource = {
  beginDrag(props, monitor, component) {

  	console.log('moving');
    console.log('props:',props);

    	const item = { id:props.id, code:props.code, color:props.color  };
    	return item;

  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.CHESSPIECE, pieceSource, collect)
export default class Queen extends Component {

	static propTypes = {
			connectDragSource: PropTypes.func.isRequired,
			isDragging: PropTypes.bool.isRequired,
			code: PropTypes.string,
			color: PropTypes.string

	};

	render ()
	{

		const { color } = this.props;
		const { connectDragSource, isDragging } = this.props;

		if (color === 'black')
			return connectDragSource(<div className='square-content' style={{
						opacity: isDragging ? 0.5 : 1,
						fontSize: 25,
						fontWeight: 'bold',
						cursor: 'move'
					}}> <span> &#9819; </span> </div>);
		else
			return connectDragSource(<div className='square-content' style={{
						opacity: isDragging ? 0.5 : 1,
						fontWeight: 'bold',
						cursor: 'move'
					}}> <span> &#9813; </span> </div>);
	}
}
