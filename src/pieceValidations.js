import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import store from './store/Store';
import {Provider} from 'react-redux';


export function validateKingMove(xy, color){
  console.log('validateKingMove() aqui');
	console.log('validateKingMove()->drop:'+xy);
  console.log('validateKingMove()->window.originposition :'+window.originposition );
  console.log('validateKingMove()->color :'+color );
  var movement = false;

  let totalColumns = 8;
  let columnsArray = ['A','B','C','D','E','F','G','H'];

    if (xy != undefined)
  	{
      let oriPosicion = window.originposition.substring(1);
      let desPosicion = xy.substring(1);

      let oriColumn = window.originposition.substring(0,1);
      let desColumn = xy.substring(0,1);

      console.log("validateKingMove->desPosicion:"+desPosicion);
      console.log("validateKingMove->oriPosicion:"+oriPosicion);

      console.log("validateKingMove->desPosicion:"+desColumn);
      console.log("validateKingMove->oriPosicion:"+oriColumn);

      let oriIndex = columnsArray.findIndex(k => k == oriColumn) +1;
      let desIndex = columnsArray.findIndex(k => k == desColumn) +1;
      let diffCol = Math.abs(oriIndex - desIndex);
      let diffFil = Math.abs(oriPosicion - desPosicion);

      console.log("validateKingMove->oriIndex:"+oriIndex);
      console.log("validateKingMove->desIndex:"+desIndex);
      console.log("validateKingMove->diffCol:"+diffCol);
      console.log("validateKingMove->diffFil:"+diffFil);

      //valide if target square is taken and if it is, validate diferent color
      console.log("validateKingMove es del mismo color? ", isSameColor(color, xy));
      console.log("validateKingMove esta tomado el square? ", isDestTaken(xy));

      if(isDestTaken(xy)){
        if(isSameColor(color, xy)) return false
      }


      //Same column
      if( oriColumn == desColumn && diffFil == 1) movement = true;

      //different column
      if( oriColumn != desColumn){
        if ((diffFil == 0 || diffFil == 1) && (diffCol == 0 || diffCol == 1)) movement = true;
      }


    }

    return movement;

}


export function validateQueenMove(xy, color){
  console.log('validateQueenMove()');
	console.log('validateQueenMove()->drop:'+xy);
  console.log('validateQueenMove()->window.originposition :'+window.originposition );
  var movement = false;

  let totalColumns = 8;
  let columnsArray = ['A','B','C','D','E','F','G','H'];

    if (xy != undefined)
  	{
      let oriPosicion = window.originposition.substring(1);
      let desPosicion = xy.substring(1);

      let oriColumn = window.originposition.substring(0,1);
      let desColumn = xy.substring(0,1);

      console.log("validateQueenMove->desPosicion:"+desPosicion);
      console.log("validateQueenMove->oriPosicion:"+oriPosicion);

      console.log("validateQueenMove->desPosicion:"+desColumn);
      console.log("validateQueenMove->oriPosicion:"+oriColumn);

      let oriIndex = columnsArray.findIndex(k => k == oriColumn) +1;
      let desIndex = columnsArray.findIndex(k => k == desColumn) +1;
      let diffCol = Math.abs(oriIndex - desIndex);
      let diffFil = Math.abs(oriPosicion - desPosicion);

      console.log("validateQueenMove->oriIndex:"+oriIndex);
      console.log("validateQueenMove->desIndex:"+desIndex);
      console.log("validateQueenMove->diffCol:"+diffCol);
      console.log("validateQueenMove->diffFil:"+diffFil);

      //valide if target square is taken and if it is, validate diferent color
      console.log("validateMove es del mismo color? ", isSameColor(color, xy));
      console.log("validateMove esta tomado el square? ", isDestTaken(xy));

      if(isDestTaken(xy)){
        if(isSameColor(color, xy)) return false
      }

      if( oriColumn != desColumn){
        if (diffCol == diffFil) movement = true;
      }

      if( oriColumn == desColumn ) movement = true;
      else {
        if(oriPosicion == desPosicion) movement = true;
      }
    }

    return movement;

}



export function validateBishopMove(xy, color){
  console.log('validateBishopMove()');
	console.log('validateBishopMove()->drop:'+xy);
  console.log('validateBishopMove()->window.originposition :'+window.originposition );
  console.log('validateBishopMove()->color :'+color);
  var movement = false;

  let totalColumns = 8;
  let columnsArray = ['A','B','C','D','E','F','G','H'];

    if (xy != undefined)
  	{
      let oriPosicion = window.originposition.substring(1);
      let desPosicion = xy.substring(1);

      let oriColumn = window.originposition.substring(0,1);
      let desColumn = xy.substring(0,1);

      console.log("validateBishopMove->desPosicion:"+desPosicion);
      console.log("validateBishopMove->oriPosicion:"+oriPosicion);

      console.log("validateBishopMove->desPosicion:"+desColumn);
      console.log("validateBishopMove->oriPosicion:"+oriColumn);

      let oriIndex = columnsArray.findIndex(k => k == oriColumn) +1;
      let desIndex = columnsArray.findIndex(k => k == desColumn) +1;
      let diffCol = Math.abs(oriIndex - desIndex);
      let diffFil = Math.abs(oriPosicion - desPosicion);

      console.log("validateBishopMove->oriIndex:"+oriIndex);
      console.log("validateBishopMove->desIndex:"+desIndex);
      console.log("validateBishopMove->diffCol:"+diffCol);
      console.log("validateBishopMove->diffFil:"+diffFil);

      //valide if target square is taken and if it is, validate is diferent color
      console.log("validateMove es del mismo color? ", isSameColor(color, xy));
      console.log("validateMove esta tomado el square? ", isDestTaken(xy));

      if(isDestTaken(xy)){
        if(isSameColor(color, xy)) return false
      }


      if( oriColumn != desColumn){
        if (diffCol == diffFil) movement = true;
      }
    }



    return movement;

}



export function validateRookMove(xy, color){
  console.log('validateRookMove()');
	console.log('validateRookMove()->drop:'+xy);
  console.log('validateRookMove()->window.originposition :'+window.originposition );
  var movement = false;


    if (xy != undefined)
  	{
      let oriPosicion = window.originposition.substring(1);
      let desPosicion = xy.substring(1);

      let oriColumn = window.originposition.substring(0,1);
      let desColumn = xy.substring(0,1);

      console.log("validateRookMove->desPosicion:"+desPosicion);
      console.log("validateRookMove->oriPosicion:"+oriPosicion);

      console.log("validateRookMove->desPosicion:"+desColumn);
      console.log("validateRookMove->oriPosicion:"+oriColumn);

      //valide if target square is taken and if it is, validate is diferent color
      console.log("validateRookMove es del mismo color? ", isSameColor(color, xy));
      console.log("validateRookMove esta tomado el square? ", isDestTaken(xy));

      if(isDestTaken(xy)){
        if(isSameColor(color, xy)) return false
      }

      if(oriColumn == desColumn) movement = true;
      else {
        if(oriPosicion == desPosicion) movement = true;
      }
    }

    return movement;

}

export function validatePawnMove(xy, color) {
  console.log('validatePawnMove()');
	console.log('validatePawnMove()->drop:'+xy);
  console.log('validatePawnMove()->window.originposition :'+window.originposition );
  var movement = false;

  if (xy != undefined)
	{
    let oriPosicion = window.originposition.substring(1);
    let desPosicion = xy.substring(1);
    let oriColumn = window.originposition.substring(0,1);
    let desColumn = xy.substring(0,1);

    console.log("validatePawnMove->desPosicion:"+desPosicion);
    console.log("validatePawnMove->oriPosicion:"+oriPosicion);
    console.log("validatePawnMove->oriColumn:"+oriColumn);
    console.log("validatePawnMove->desColumn:"+desColumn);

    console.log("el destino tiene pieza? ", isDestTaken(xy));


  if(color=='white'){
    if(oriPosicion == 2){
      if( (desPosicion == 3 || desPosicion == 4) && (oriColumn === desColumn) ) movement = true;
      if( (desPosicion == 3 || desPosicion == 4) && (oriColumn !== desColumn) && isDestTaken(xy)) movement = true;
    }
    else {
      if ( ((desPosicion - oriPosicion == 1) && (oriColumn === desColumn) && !isDestTaken(xy))) movement = true;
      if ( (desPosicion - oriPosicion == 1) && (oriColumn !== desColumn) && isDestTaken(xy)) movement = true;
      }
  }

  if(color=='black'){
    if(oriPosicion == 7){
      if( (desPosicion == 6 || desPosicion == 5) && (oriColumn === desColumn) ) movement = true;
      if( (desPosicion == 6 || desPosicion == 5) && (oriColumn !== desColumn) && isDestTaken(xy) ) movement = true;
    }
    else {
      if( ( oriPosicion - desPosicion == 1) && (oriColumn === desColumn) && !isDestTaken(xy) ) movement = true;
      if( ( oriPosicion - desPosicion == 1) && (oriColumn !== desColumn) && isDestTaken(xy) ) movement = true;
    }
  }

		console.log('validatePawnMove->movement:'+movement);
	}

  return movement;

}


export function validateKnightMove(xy, color) {
  console.log('moveKnight() dentro');
	console.log('moveKnight()->click:'+xy);
  console.log('moveKnight()->window.actualposition :'+window.actualposition );
  console.log('moveKnight()->knight color :'+color );


  if (window.actualposition != undefined)
	{
		var movement = validateMove(window.actualposition, xy, color);
		console.log('moveKnight()->movement:'+movement);
	}

	//receive([ xy[0] , xy[1] ]);
	if(movement){
		  window.actualposition = xy;
	    console.log('moveKnight()->xy1:'+xy);
	    var a  = xy.split('');
      //test([ a[0] , a[1] ]);
	}

  return movement;

}


function validateMove(currentPiecePos, newPos, color)
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

  //valide if target square is taken and if it is, validate is diferent color
  console.log("validateMove es del mismo color? ", isSameColor(color, newPos));
  console.log("validateMove esta tomado el square? ", isDestTaken(newPos));

  if(isDestTaken(newPos)){
    if(isSameColor(color, newPos)) return false
  }

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

function isDestTaken(dest){

  console.log("isDestTaken.dest;"+dest);
  console.log('isDestTaken.store:', store.getState().boardmove);

  let map = new Map(store.getState().boardmove);
  console.log("map:",map);

  if(!map.has(dest)) {
    console.log("casillero destino esta vacio");
    return false;
  }

  console.log("casillero destino esta ocupado");
  return true;
}

function isSameColor(color, dest){

  console.log("isSameColor.dest;"+dest);
  console.log('isSameColor.store:', store.getState().boardmove);

  let map = new Map(store.getState().boardmove);
  console.log("map:",map);

  if(!map.has(dest)) {
    console.log("isSameColor:casillero destino esta vacio");
    return false;
  }

  console.log("isSameColor:casillero destino esta ocupado");
  console.log("clave del mapa: ", map.get(dest).props.color);
  const colorDestino = map.get(dest).props.color;

  if(color === colorDestino) return true;

  return false;
}
