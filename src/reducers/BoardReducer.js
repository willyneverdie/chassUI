import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import King from '../pieces/King';
import Pawn from '../pieces/Pawn';


//const boardReducer = (state=['B','1'], action) => {
const boardReducer = (state=new Map([[ "B1", <Knight code="kn"/> ],[ "B2", <Pawn code="p"/> ], [ "A1", <Rook color='white'/> ]]), action) => {
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
