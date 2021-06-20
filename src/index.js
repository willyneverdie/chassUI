/*const { createElement } = React;*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Jugadas from './jugadas';
import App from './app';
//import { observe } from './Observe';
import { init_observe } from './Game';

//import redux
import store from './store/Store';
import {Provider} from 'react-redux';


//$(document).ready(function() {
//import { DndProvider } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';

// let myStore = createStore(
// 	boardReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


const { render } = ReactDOM
const style = {

	backgroundColor: 'orange',
	color: 'white',
	fontFamily:'verdana'
}

const rootEl = document.getElementById('react-container');
const rootJugadas = document.getElementById('clock-container');

init_observe((knightPosition,store) =>
  ReactDOM.render(
		<Provider store={store}>
    		<App piecePosition={knightPosition} val="values" />
		</Provider>,
    rootEl
  )
);

//rendering clock and algebraic notacion
ReactDOM.render(
	<Provider store={store}>
			<Jugadas/>
	</Provider>,
	rootJugadas
)



/*
/*<Board piecePosition={knightPosition} />
funct observ
(
	funct (knightPosition)
	{
		ReactDOM.render(
		    <Board piecePosition={knightPosition} />,
		    rootEl
		  )
	}

)
{
	function observe(receive) {
		  setInterval( () => receive([ String.fromCharCode(64 + Math.floor(Math.random() * 8)+1), Math.floor(Math.random() * 8) ]), 800);

}

*/

/*
render (
	<div className='row'>
		<Board piecePosition={[0, 0]} />

	</div>
	,
	document.getElementById('react-container')
	)
*/

/*render(
	//<h1 id='title'
		//className='header'
		//style={style}>
		//Hello World!
	//</h1>
	<Board knightPosition={[0, 0]} />


	,
	document.getElementById('react-container')
)*/
