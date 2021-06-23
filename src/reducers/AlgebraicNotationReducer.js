
const AlgebraicNotationReducer = (state=[], action) => {

  switch(action.type){
    case 'write':
      console.log('inside notation reducer');
      console.log('write');
      console.log(action);
      console.log('inside notation reducer ACTULIZADO');
      state = state.slice();
      state.push(action.payload);
      return state;
    default:
      console.log('Default write');
      return state;
  }
}

export default AlgebraicNotationReducer;
