import {combineReducers } from 'redux';
import Increment from './Increment';
import Decrement from './Decrement';
import BoardReducer from './BoardReducer';
import AlgebraicNotationReducer from './AlgebraicNotationReducer';

//const value = Increment(20,{type:'Increment',payload:2});
//console.log(value);

const CombineReducer = combineReducers ({
  boardmove:BoardReducer,notation:AlgebraicNotationReducer
})


export default CombineReducer;
