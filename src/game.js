import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import store from './store/Store';
import {Provider} from 'react-redux';

export function init_observe(receive) {

  console.log('init_observe');
  //setInterval(() => receive([String.fromCharCode(64 + Math.floor(Math.random() * 8)+1),
  //(Math.floor(Math.random() * 7.5 ) ) + 1 ]), 800);

	let x = String.fromCharCode(64 + Math.floor(Math.random() * 8)+1);
	let y = (Math.floor(Math.random() * 7.5 ) ) + 1;

	window.actualposition = x + y;
  console.log('store:', store.getState());
	//receive([ x , y ], store);
  receive(store.getState().boardmove, store);

}


export function moveKnight(xy) {
  console.log('moveKnight()');
	console.log('click:'+xy);

	if (window.actualposition != undefined)
	{
		var movement = validateMove(window.actualposition, xy);
		console.log('movement:'+movement);
	}

	//receive([ xy[0] , xy[1] ]);
	if(movement){
		window.actualposition = xy;
	    console.log('xy1:'+xy);

	    var a  = xy.split('');
		test([ a[0] , a[1] ]);
	}
}

export function observe(receive,xy) {
  console.log('observe()');
	console.log('observe()->click:'+xy);

	if (window.actualposition != undefined)
	{
		var movement = validateMove(window.actualposition, xy);
		console.log('observe()->movement:'+movement);
	}else{
    console.log('observe()->actual position is undefine');
  }

	//receive([ xy[0] , xy[1] ]);
	if(movement){
		  window.actualposition = xy;
	    console.log('observe()-> xy2:'+xy);

	    var a  = xy.split('');
      console.log('observe()->invoke receive()');
      console.log('observe()->store:', store.getState());
		  receive([ a[0] , a[1] ],store);
	}
}

function validateMove(currentPiecePos, newPos)
{
  console.log('validateMove()');
	let curCol = currentPiecePos[0];
	let curRow = currentPiecePos[1];

	let curRowUp = parseInt(curRow) + 2;
	let curRowDown = parseInt(curRow) - 2;
	let curRowLessUp = parseInt(curRow) + 1;
	let curRowLessDown = parseInt(curRow) - 1;

	let curColFarRight =  String.fromCharCode(toUnicode(curCol) + 2 );
	let curColFarLeft =  String.fromCharCode(toUnicode(curCol) - 2 );
	let curColRight =  String.fromCharCode(toUnicode(curCol) + 1 );
	let curColLeft =  String.fromCharCode(toUnicode(curCol) - 1 );

	console.log('validateMove()-> 1 pospos;'+curColRight + curRowUp);
	console.log('validateMove()-> 2 pospos'+curColLeft + curRowUp);

	console.log('validateMove()-> 3 pospos;'+curColFarRight + curRowLessUp);
	console.log('validateMove()-> 4 pospos;'+curColFarLeft + curRowLessUp);

	console.log('validateMove()-> 5 currentPiecePos'+currentPiecePos);

	switch (newPos)
	{
		case (curColLeft + curRowUp):
			console.log('validateMove()-> aqui:'+curColRight + curRowUp);
			return true;
			break;
		case (curColRight + curRowUp):
			console.log('validateMove()-> aqui:'+curColRight + curRowUp);
			return true;
			break;
		case (curColFarRight + curRowLessUp ):
			console.log('validateMove()-> aqui:'+curColRight + curRowLessUp);
			return true;
			break;
		case (curColFarLeft + curRowLessUp ):
			console.log('validateMove()-> aqui:'+curColRight + curRowLessUp);
			return true;
			break;
		default:
			return false;
    		break;
    	case (curColLeft + curRowDown):
			console.log('validateMove()-> aqui:'+curColLeft + curRowDown);
			return true;
			break;
		case (curColRight + curRowDown  ):
			console.log('validateMove()-> aqui:'+curColRight + curRowDown);
			return true;
			break;
		case (curColFarRight + curRowLessDown ):
			console.log('validateMove()-> aqui:'+curColFarRight + curRowLessDown);
			return true;
			break;
		case (curColFarLeft + curRowLessDown ):
			console.log(' validateMove()-> aqui:'+curColFarLeft + curRowLessDown);
			return true;
			break;

	}


	//console.log(curRow + curCol + ';');
}




const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function toUnicode(theString) {
  var unicodeString = '';
  for (var i=0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i);
    //while (theUnicode.length < 4) {
      //theUnicode = '0' + theUnicode;
    //}
    theUnicode = theUnicode;
    unicodeString += theUnicode;
  }
  return parseInt(unicodeString);
}



export function observe2(coordenated) {
  console.log('observe2');
  //setInterval(() => receive([String.fromCharCode(64 + Math.floor(Math.random() * 8)+1),
	//(Math.floor(Math.random() * 7.5 ) ) + 1 ]), 800);
	var a = coordenated[0];
	var b = coordenated[1];
	coordenated([a,b]);

}


//This is the event that process the click event in the square
//receive the coordenate == x
export function test(x) {

  console.log('test()');
	const rootEl = document.getElementById('react-container');
  console.log('test()->store:', store.getState());

  //this.props.decrement();

  // this is the rendering of the component by hand
  // observe((piecePosition,store) =>
	//   ReactDOM.render(
  //     <Provider store={store}>
  //       <Board piecePosition={piecePosition}/>
  //     </Provider>
  //     , rootEl),
  //   x
  // );

}
