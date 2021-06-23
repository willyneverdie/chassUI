import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//REDUX
import store from './store/Store';
import { connect } from 'react-redux';
import {Move, Notation} from './actions/Action';

const mapStateToProps = (state) => {
  return{
    piecePos: state.boardmove,
    notation: state.notation
  }
}

const mapDistpatchToProps= (dispatch)=>{
  return{
    //move:(mov)=>dispatch(Move(mov)),
    //notation:(mov)=>dispatch(Notation(mov))
  }
}

class Jugadas extends Component {

  constructor(props) {
    super(props);
  }

  render(){

//    const rootEl = document.getElementById('clock-container');
    //setTimeout(function() { console.log('Jugadas()->render(props)->store.getState().notation:'+store.getState().notation); }, 2000);
    console.log('Jugadas()->render(props)->store.getState().notation:'+store.getState().notation);
    console.log('Jugadas()->render(props)->store.getState().notation:'+this.props.notation);
    return(
      //let notation = store.getState().notation;
      <div>
        <h1>Lista de Jugadas</h1>
        <ul>
        {
          store.getState().notation.map( (notation, index) =>{
            return <li>{notation}</li>;
            //console.log('aqui',{notation});
          }

          )
        }
        </ul>
        </div>

    );
  }

}

//export default Jugadas;
export default connect(mapStateToProps,mapDistpatchToProps)(Jugadas);
