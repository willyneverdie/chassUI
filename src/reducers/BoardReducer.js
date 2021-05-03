import initialBoard   from '../data/initialState';
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import King from '../pieces/King';
import Pawn from '../pieces/Pawn';
//knight = kn, pawn = p, rook = r,queen = q, king =ki ,bishop = b

console.log('initialBoard:',initialBoard  );
//new Map([[ "B1", <Knight code="kn"/> ],[ "B2", <Pawn code="p"/> ], [ "A1", <Rook code='r' color='white'/> ], [ "C1", <Bishop code='b' color='white'/> ], [ "D1", <Queen code='q' color='white'/> ], [ "E1", <King code='ki' color='white'/> ]])
//const boardReducer = (state=['B','1'], action) => {
const boardReducer = (state=initialBoard, action) => {
 console.log('inside boardReducer');
 console.log('inside boardReducer move', state);
  switch(action.type){
    case 'MOVE':
      console.log('inside boardReducer move');
      console.log('inside boardReducer move', state);
      console.log('inside boardReducer move action.payload:'+action.payload);
      console.log('inside boardReducer move window.originposition', window.originposition);

      //return new map with the new value
      let mapaActual = state;
      let square = action.payload;
      let objeto = mapaActual.get(window.originposition)
      let newMap = mapaActual.set(square,objeto);
      newMap.delete(window.originposition);
      //state.set(action.payload,state.get(action.payload));
      console.log('inside boardReducer move newMap', newMap);
      return new Map (newMap);
    default:
      console.log('inside boardReducer default');
        return state
  }
};

export default boardReducer;
