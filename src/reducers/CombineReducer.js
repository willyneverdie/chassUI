import {combineReducers } from 'redux';
import Increment from './Increment';
import Decrement from './Decrement';
import BoardReducer from './BoardReducer';

//const value = Increment(20,{type:'Increment',payload:2});
//console.log(value);

const CombineReducer = combineReducers ({
  increment:Increment,decrement:Decrement,boardmove:BoardReducer
})


export default CombineReducer;
